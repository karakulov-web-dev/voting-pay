import { connect } from "react-redux";
import * as Redux from "redux";

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

const VerticalSidebar = ({ animation, direction, visible }: any) => (
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
    <Menu.Item as="a">
      <Icon name="wrench" />
      Инструменты
    </Menu.Item>
    <Menu.Item as="a">
      <Icon name="info" />
      Информация
    </Menu.Item>
    <Menu.Item as="a">
      <Icon name="money" />
      Баланс
    </Menu.Item>
    <Menu.Item as="a">
      <Icon name="briefcase" />
      Сделки
    </Menu.Item>
    <Menu.Item as="a">
      <Icon name="envelope" />
      Сообщения
    </Menu.Item>
    <Menu.Item as="a">
      <Icon name="setting" />
      Настройки
    </Menu.Item>
    <Menu.Item as="a">
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
              <Header as="h3">Application Content</Header>
              <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
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
