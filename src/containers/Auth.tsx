import React from "react";
import { ActionCreator, Dispatch, bindActionCreators } from "redux";
import { State } from "../store/state";
import { connect } from "react-redux";
import { checkAccessToken, accessTokenChecker } from "../actions/Auth";
import { Redirect } from "react-router-dom";

interface AuthProps {
  authStatus: boolean;
  checkAccessToken: ActionCreator<void>;
  children?: any;
}

interface ICheckAuthResult {
  authStatus: boolean;
  AccessTokenStatus: boolean;
}

class Auth extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    let authStatus = this.checkAuth();
    if (authStatus && this.props.authStatus) {
      return this.props.children;
    } else if (authStatus && typeof this.props.authStatus === "undefined") {
      return <div />;
    } else {
      return (
        <Redirect
          to={{
            pathname: "/login"
          }}
        />
      );
    }
  }
  componentDidMount() {
    const AccessToken = localStorage.getItem("AccessToken");
    setTimeout(() => {
      this.props.checkAccessToken(AccessToken, accessTokenChecker);
    });
  }
  private checkAuth(): boolean {
    const AccessToken = localStorage.getItem("AccessToken");
    if (AccessToken) {
      return true;
    } else {
      return false;
    }
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
      checkAccessToken,
      dispatch
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Auth);
