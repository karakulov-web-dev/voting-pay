import { connect } from "react-redux";
import { Login } from "../components/Login";
import { bindActionCreators, Dispatch } from "redux";
import { State } from "../store/state";
import { registrationUser } from "../actions/registrationUser";
import { checkAccessToken } from "../actions/Auth";
import { loginUser } from "../actions/checkLogin";
import { restorePassword } from "../actions/restorePassword";
import { httpRestorePassword } from "../HTTP";

function mapStateToProps(state: State, ownProps: any) {
  return {
    pathname: ownProps.location.pathname,
    errorMessageLogin: state.loginForm.errorMessageLogin,
    errorMessageRegistration: state.loginForm.errorMessageRegistration,
    errorMessageRestorePass: state.loginForm.errorMessageRestorePass,
    authStatus: state.User.authStatus,
    restorePasswordSessionId: state.User.restorePasswordSessionId
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(
    {
      loginSubmitForm: loginUser,
      registrationSubmitForm: registrationUser,
      checkAccessToken: checkAccessToken,
      restorePassword: restorePassword.bind(null, httpRestorePassword),
      dispatch
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
