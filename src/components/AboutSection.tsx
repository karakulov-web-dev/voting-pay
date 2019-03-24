import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import {
  AboutItem,
  AboutItem_voting,
  AboutItem_how_use,
  AboutItem_get_money
} from "./AboutItems";

export class AboutSection extends React.Component {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <Switch>
        <Route path="/about/voting" component={AboutItem_voting} />
        <Route path="/about/how-use" component={AboutItem_how_use} />
        <Route path="/about/get-money" component={AboutItem_get_money} />
        <Route path="/about" component={AboutItem} />
        <Route path="/" component={AboutItem} />
      </Switch>
    );
  }
}
