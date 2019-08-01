import Auth from "../containers/Auth";
import React, { Component } from "react";
import {
  Button,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Container
} from "semantic-ui-react";
import { relative } from "path";

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
  >
    <Menu.Item as="a">
      <Icon name="home" />
      Home
    </Menu.Item>
    <Menu.Item as="a">
      <Icon name="gamepad" />
      Games
    </Menu.Item>
    <Menu.Item as="a">
      <Icon name="camera" />
      Channels
    </Menu.Item>
  </Sidebar>
);

class SidebarExampleTransitions extends Component {
  state = {
    animation: "overlay",
    direction: "left",
    dimmed: false,
    visible: false
  };

  handleAnimationChange = (animation: string) => () =>
    this.setState((prevState: any) => ({
      animation,
      visible: !prevState.visible
    }));

  handleDirectionChange = (direction: string) => () =>
    this.setState({ direction, visible: false });

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
              <Container
                fluid
                style={{
                  background: "#1b1c1d",
                  padding: "17px"
                }}
              >
                <Button
                  onClick={this.handleAnimationChange("push")}
                  icon
                  style={{ position: "relative" }}
                >
                  <Icon name="sidebar" />
                </Button>
              </Container>
              <Header as="h3">Application Content</Header>
              <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export function Panel() {
  return (
    <Auth>
      <SidebarExampleTransitions />
    </Auth>
  );
}
