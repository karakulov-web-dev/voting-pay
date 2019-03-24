import React from "react";

interface FactsItemProps {
  favicon: JSX.Element;
  number: number;
  title: string;
}

class TeamFactsItem extends React.Component<FactsItemProps> {
  constructor(props: FactsItemProps) {
    super(props);
  }
  render() {
    return (
      <li className="team-facts-item">
        <div className="fact-circle">{this.props.favicon}</div>
        <p className="fact-number">{this.props.number}</p>
        <h2 className="fact-title">{this.props.title}</h2>
      </li>
    );
  }
}

export default TeamFactsItem;
