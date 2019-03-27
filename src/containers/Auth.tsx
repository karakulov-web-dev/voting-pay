import React from "react";
import { ActionCreator, Dispatch, bindActionCreators } from "redux";
import { Login } from "../components/Login";
import { State } from "../store/state";
import { connect } from "react-redux";
import * as actions from "../actions/sliderActions";
import { checkAccessToken } from "../actions/Auth";

interface AuthProps {
  authStatus: boolean;
  checkAccessToken: ActionCreator<void>;
  children?: any;
}

class Auth extends React.Component<any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    let authStatus = this.checkAuth();
    if (authStatus === true) {
      return this.props.children;
    } else if (authStatus === false) {
      return <Login />;
    } else {
      return <Login />;
    }
  }
  private checkAuth(): boolean | undefined {
    const AccessToken = localStorage.getItem("AccessToken");
    if (!AccessToken) {
      return false;
    }
    if (this.props.authStatus) {
      return true;
    }
    setTimeout(() => {
      this.props.checkAccessToken(AccessToken);
    });
    return undefined;
  }
}

function mapStateToProps(state: State) {
  return {
    authStatus: state.User.authStatus
  };
}

function matchDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(
    {
      checkAccessToken: checkAccessToken
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Auth);

//    <Redirect
//to = {{
//  pathname: "/login"
//}}
//
//
