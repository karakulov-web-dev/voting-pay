"use strict";
exports.__esModule = true;
var react_redux_1 = require("react-redux");
var Login_1 = require("../components/Login");
var redux_1 = require("redux");
var registrationUser_1 = require("../actions/registrationUser");
var Auth_1 = require("../actions/Auth");
var checkLogin_1 = require("../actions/checkLogin");
var restorePassword_1 = require("../actions/restorePassword");
var HTTP_1 = require("../HTTP");
function mapStateToProps(state, ownProps) {
    return {
        pathname: ownProps.location.pathname,
        errorMessageLogin: state.loginForm.errorMessageLogin,
        errorMessageRegistration: state.loginForm.errorMessageRegistration,
        errorMessageRestorePass: state.loginForm.errorMessageRestorePass,
        authStatus: state.User.authStatus,
        restorePasswordSessionId: state.User.restorePasswordSessionId
    };
}
function mapDispatchToProps(dispatch) {
    return redux_1.bindActionCreators({
        loginSubmitForm: checkLogin_1.loginUser,
        registrationSubmitForm: registrationUser_1.registrationUser,
        checkAccessToken: Auth_1.checkAccessToken,
        restorePassword: restorePassword_1.restorePassword.bind(null, HTTP_1.httpRestorePassword),
        dispatch: dispatch
    }, dispatch);
}
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Login_1.Login);
