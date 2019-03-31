import React from "react";
import { ActionCreator, Dispatch, bindActionCreators } from "redux";
import Login from "../containers/Login";
import { State } from "../store/state";
import { connect } from "react-redux";
import { checkAccessToken, accessTokenChecker } from "../actions/Auth";
import { Route } from "react-router";

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
      return <Route component={Login} />;
    } else {
      return <Route component={Login} />;
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
      this.props.checkAccessToken(AccessToken, accessTokenChecker);
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
