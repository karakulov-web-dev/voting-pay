"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var redux_1 = require("redux");
var Login_1 = require("../components/Login");
var react_redux_1 = require("react-redux");
var Auth_1 = require("../actions/Auth");
var Auth = /** @class */ (function (_super) {
    __extends(Auth, _super);
    function Auth(props) {
        return _super.call(this, props) || this;
    }
    Auth.prototype.render = function () {
        var authStatus = this.checkAuth();
        if (authStatus === true) {
            return this.props.children;
        }
        else if (authStatus === false) {
            return react_1["default"].createElement(Login_1.Login, null);
        }
        else {
            return react_1["default"].createElement(Login_1.Login, null);
        }
    };
    Auth.prototype.checkAuth = function () {
        var _this = this;
        var AccessToken = localStorage.getItem("AccessToken");
        if (!AccessToken) {
            return false;
        }
        if (this.props.authStatus) {
            return true;
        }
        setTimeout(function () {
            _this.props.checkAccessToken(AccessToken, Auth_1.accessTokenChecker);
        });
        return undefined;
    };
    return Auth;
}(react_1["default"].Component));
function mapStateToProps(state) {
    return {
        authStatus: state.User.authStatus
    };
}
function matchDispatchToProps(dispatch) {
    return redux_1.bindActionCreators({
        checkAccessToken: Auth_1.checkAccessToken
    }, dispatch);
}
exports["default"] = react_redux_1.connect(mapStateToProps, matchDispatchToProps)(Auth);
