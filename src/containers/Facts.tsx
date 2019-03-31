import React from "react";
import { bindActionCreators, ActionCreator, Dispatch } from "redux";
import { connect } from "react-redux";

import TeamFactsItem from "../components/teamFactsItem";

import * as actions from "../actions/teamFactsActions";
import { State } from "../store/state";

let data = [
  {
    title: "Активных клиентов",
    favicon: <i className="fa fa-user fa-2x" />
  },
  {
    title: "Создано голосований",
    favicon: <i className="fas fa-poll fa-2x" />
  },
  {
    title: "Получено голосов",
    favicon: <i className="fas fa-poll-h fa-2x" />
  },
  {
    title: "Выплаченно средств",
    favicon: <i className="fas fa-money-bill-wave fa-2x" />
  }
];

interface TeamFactsProps {
  currNumber: number[];
  finished: boolean;
  startCount: ActionCreator<void>;
  stopCount: ActionCreator<void>;
}

class TeamFactsApp extends React.Component<TeamFactsProps> {
  constructor(props: TeamFactsProps) {
    super(props);
    this.scrollHandler = this.scrollHandler.bind(this);
  }

  componentWillMount() {}

  componentDidMount() {
    document.addEventListener("scroll", this.scrollHandler);
  }

  scrollHandler() {
    let teamFactsElem = document.querySelector(".team-facts");
    let top: number,
      bottom: number,
      headerOffset = 100;
    if (teamFactsElem) {
      top = teamFactsElem.getBoundingClientRect().top;
      bottom = teamFactsElem.getBoundingClientRect().bottom;
    } else {
      return;
    }

    if (
      top <= document.documentElement.clientHeight &&
      bottom >= headerOffset
    ) {
      document.removeEventListener("scroll", this.scrollHandler);
      this.props.startCount(100);
    }
  }

  render() {
    if (this.props.finished) {
      this.props.stopCount();
    }

    let items = data.map((item, index) => {
      return (
        <TeamFactsItem
          key={index}
          title={item.title}
          number={this.props.currNumber[index]}
          favicon={item.favicon}
        />
      );
    });

    return <ul className="team-facts clearfix">{items}</ul>;
  }
}

function mapStateToProps(state: State) {
  return {
    currNumber: state.teamFacts.currNumber,
    finished: state.teamFacts.finished
  };
}

function matchDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(
    {
      startCount: actions.startCount,
      stopCount: actions.stopCount
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(TeamFactsApp);
