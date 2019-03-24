import React from "react";
import { bindActionCreators, Dispatch, ActionCreator } from "redux";
import { connect } from "react-redux";

import SliderItem1 from "../components/slider/sliderItem1.js";
import SliderItem2 from "../components/slider/sliderItem2.js";
import SliderItem3 from "../components/slider/sliderItem3.js";

import * as actions from "../actions/sliderActions";
import { State } from "../store/state.js";

interface SliderProps {
  currSlide: number;
  transitionDuration: number;
  sliderWidth: number;
  hiddenChange: boolean;
  switchToSlide: ActionCreator<void>;
  switchTimeoutHidden: ActionCreator<void>;
  switchAuto: ActionCreator<void>;
  switchAutoEnable: ActionCreator<void>;
}

class SliderApp extends React.Component<SliderProps> {
  constructor(props: SliderProps) {
    super(props);

    this.switchNextSlide = this.switchNextSlide.bind(this);
    this.switchPrevSlide = this.switchPrevSlide.bind(this);
  }

  componentDidMount() {
    this.props.switchAuto();
  }

  // eslint-disable-next-line react/no-typos
  componentWillUnMount() {
    // This action will clear timers
    this.props.switchToSlide();
  }

  switchNextSlide() {
    if (this.props.hiddenChange) return;

    this.props.switchToSlide("next");
    this.props.switchAutoEnable();
  }

  switchPrevSlide() {
    if (this.props.hiddenChange) return;

    this.props.switchToSlide("prev");
    this.props.switchAutoEnable();
  }

  render() {
    if (this.props.hiddenChange) {
      this.props.switchTimeoutHidden(this.props.transitionDuration);
    }

    let sliderOffset = this.props.currSlide * this.props.sliderWidth;
    let sliderOptions = {
      transform: `translate3d(${-sliderOffset}px, 0px, 0px)`,
      transitionDuration: `${this.props.transitionDuration}ms`
    };

    return (
      <div className="slider-container">
        <div className="container">
          <div className="slider-nav-container">
            <span className="slider-nav-left" onClick={this.switchPrevSlide}>
              <i className="fa fa-angle-left" style={{ fontSize: "40px" }} />
            </span>
            <span className="slider-nav-right" onClick={this.switchNextSlide}>
              <i className="fa fa-angle-right" style={{ fontSize: "40px" }} />
            </span>
          </div>
        </div>
        <ul style={sliderOptions} className="slider">
          <SliderItem3 />
          <SliderItem1 />
          <SliderItem2 />
          <SliderItem3 />
          <SliderItem1 />
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state: State) {
  return {
    currSlide: state.slider.currSlide,
    transitionDuration: state.slider.transitionDuration,
    sliderWidth: state.slider.sliderWidth,
    hiddenChange: state.slider.hiddenChange
  };
}

function matchDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(
    {
      switchToSlide: actions.switchToSlide,
      switchTimeoutHidden: actions.switchTimeoutHidden,
      switchAuto: actions.switchAuto,
      switchAutoEnable: actions.switchAutoEnable
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(SliderApp);
