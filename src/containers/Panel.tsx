import { connect } from "react-redux";
import * as Redux from "redux";
import { Switch, Route } from "react-router-dom";
import tool from "../components/tool";

import Auth from "../containers/Auth";
import React, { Component } from "react";
import {
  Button,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar
} from "semantic-ui-react";

let style = {
  minHeight: "calc(100vh)"
};

const VerticalSidebar = ({ animation, direction, visible, logOut }: any) => (
  <Sidebar
    as={Menu}
    animation={animation}
    direction={direction}
    icon="labeled"
    inverted
    vertical
    visible={visible}
    width="thin"
    style={{ paddingTop: "109px" }}
  >
    <Route
      render={({ history }) => (
        <Menu.Item
          as="a"
          active={
            history.location.pathname === "/panel" ||
            history.location.pathname === "/panel/tool"
          }
          onClick={() => {
            history.push("/panel/tool");
          }}
        >
          <Icon name="wrench" />
          Инструменты
        </Menu.Item>
      )}
    />
    <Route
      render={({ history }) => (
        <Menu.Item
          as="a"
          active={history.location.pathname === "/panel/info"}
          onClick={() => {
            history.push("/panel/info");
          }}
        >
          <Icon name="info" />
          Справка
        </Menu.Item>
      )}
    />
    <Route
      render={({ history }) => (
        <Menu.Item
          as="a"
          active={history.location.pathname === "/panel/balance"}
          onClick={() => {
            history.push("/panel/balance");
          }}
        >
          <Icon name="money" />
          Баланс
        </Menu.Item>
      )}
    />
    <Route
      render={({ history }) => (
        <Menu.Item
          as="a"
          active={history.location.pathname === "/panel/deals"}
          onClick={() => {
            history.push("/panel/deals");
          }}
        >
          <Icon name="briefcase" />
          Сделки
        </Menu.Item>
      )}
    />
    <Route
      render={({ history }) => (
        <Menu.Item
          as="a"
          active={history.location.pathname === "/panel/message"}
          onClick={() => {
            history.push("/panel/message");
          }}
        >
          <Icon name="envelope" />
          Сообщения
        </Menu.Item>
      )}
    />
    <Route
      render={({ history }) => (
        <Menu.Item
          as="a"
          active={history.location.pathname === "/panel/setting"}
          onClick={() => {
            history.push("/panel/setting");
          }}
        >
          <Icon name="setting" />
          Настройки
        </Menu.Item>
      )}
    />
    <Menu.Item
      as="a"
      onClick={() => {
        logOut();
      }}
    >
      <Icon name="log out" />
      Выход
    </Menu.Item>
  </Sidebar>
);

class SidebarPanel extends Component<any> {
  state = {
    animation: "push",
    direction: "left",
    dimmed: false,
    visible: true
  };

  handleAnimationChange = (animation: string) => () =>
    this.setState((prevState: any) => ({
      animation,
      visible: !prevState.visible
    }));

  handleDirectionChange = (direction: string) => () =>
    this.setState({ direction, visible: true });

  render() {
    const { animation, dimmed, direction, visible } = this.state;
    return (
      <div>
        <Sidebar.Pushable as={Segment} style={{ border: "none" }}>
          <VerticalSidebar
            animation={animation}
            direction={direction}
            visible={visible}
            logOut={this.props.logOut}
          />
          <Sidebar.Pusher dimmed={dimmed && visible} style={style}>
            <Segment basic style={{ padding: "0px" }}>
              <div
                style={{
                  background: "#1b1c1d",
                  padding: "20px"
                }}
              >
                <Button
                  onClick={this.handleAnimationChange("push")}
                  icon
                  style={{ position: "relative" }}
                >
                  <Icon name="sidebar" />
                </Button>
                <span>
                  <span
                    className="logo-img"
                    style={{
                      backgroundSize: "contain",
                      position: "relative",
                      top: "5px",
                      marginLeft: "20px"
                    }}
                  />
                  <span className="logo-text logo-text-part1">Voting</span>
                  <span className="logo-text logo-text-part2">Pay</span>
                </span>
                <Button
                  onClick={() => {
                    this.props.logOut();
                  }}
                  icon
                  style={{ position: "fixed", right: "50px", top: "35px" }}
                >
                  <Icon name="log out" />
                </Button>
              </div>

              <Segment
                style={{
                  marginRight: "164px",
                  marginLeft: "14px",
                  marginTop: "14px",
                  marginBottom: "14px"
                }}
              >
                <Switch>
                  <Route exact path="/panel" component={tool} />
                  <Route path="/panel/tool" component={tool} />
                </Switch>
              </Segment>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Redux.Dispatch<any>) => {
  return {
    logOut: () => {
      localStorage.removeItem("AccessToken");
      dispatch({
        type: "CHANGE_AUTH_STATUS",
        payload: false
      });
    }
  };
};

interface DispatchProps {
  logOut: () => void;
}

const PanelContainer = connect<DispatchProps>(
  null,
  mapDispatchToProps
)(SidebarPanel);

export function Panel() {
  return (
    <Auth>
      <PanelContainer />
    </Auth>
  );
}
