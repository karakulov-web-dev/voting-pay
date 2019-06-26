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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var semantic_ui_react_1 = require("semantic-ui-react");
var react_router_dom_1 = require("react-router-dom");
var Auth_1 = require("../actions/Auth");
var Login = /** @class */ (function (_super) {
    __extends(Login, _super);
    function Login(props) {
        var _this = _super.call(this, props) || this;
        console.log(_this.props);
        _this.state = {
            email: "",
            password: "",
            repeatPassword: "",
            errorMessageLogin: "",
            errorMessageRegistration: ""
        };
        return _this;
    }
    Login.prototype.componentDidMount = function () {
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
    };
    Login.prototype.render = function () {
        var _this = this;
        return (react_1["default"].createElement("div", { className: "login-form" },
            (function () {
                if (_this.props.authStatus) {
                    return react_1["default"].createElement(react_router_dom_1.Redirect, { to: { pathname: "/panel" } });
                }
                if (_this.props.restorePasswordSessionId &&
                    _this.props.pathname === "/restore-password") {
                    return react_1["default"].createElement(react_router_dom_1.Redirect, { to: { pathname: "/restore-password-session" } });
                }
                if (_this.props.pathname === "/restore-password-session" &&
                    !_this.props.restorePasswordSessionId) {
                    return react_1["default"].createElement(react_router_dom_1.Redirect, { to: { pathname: "/restore-password" } });
                }
            })(),
            react_1["default"].createElement("style", null, "\n      body > div,\n      body > div > div,\n      body > div > div > div.login-form {\n        height: 100%;\n      }\n    "),
            react_1["default"].createElement(semantic_ui_react_1.Grid, { textAlign: "center", style: { height: "100%" }, verticalAlign: "middle" },
                react_1["default"].createElement(semantic_ui_react_1.Grid.Column, { style: { maxWidth: 450 } },
                    react_1["default"].createElement(react_router_dom_1.Switch, null,
                        react_1["default"].createElement(react_router_dom_1.Route, { path: ["/restore-password", "/restore-password-session"], component: HeaderRestorePassword }),
                        react_1["default"].createElement(react_router_dom_1.Route, { path: "/registration", component: HeaderRegistration }),
                        react_1["default"].createElement(react_router_dom_1.Route, { path: "/login", component: HeaderLogin })),
                    react_1["default"].createElement(semantic_ui_react_1.Form, { size: "large", onSubmit: function () {
                            _this.setState(function (state) {
                                return __assign({}, state, { errorMessageLogin: "", errorMessageRegistration: "", errorMessageRestorePass: "" });
                            });
                            if (_this.props.pathname === "/registration") {
                                if (_this.registrationFormValidate()) {
                                    var _a = _this.state, email = _a.email, password = _a.password;
                                    _this.props.registrationSubmitForm(email, password);
                                }
                            }
                            else if (_this.props.pathname === "/restore-password") {
                                if (_this.restorePassFormValidate()) {
                                    var email = _this.state.email;
                                    console.log(email);
                                    _this.props.restorePassword(email);
                                }
                            }
                            else {
                                if (_this.loginFormValidate()) {
                                    var _b = _this.state, email = _b.email, password = _b.password;
                                    _this.props.loginSubmitForm(email, password);
                                }
                            }
                        } },
                        react_1["default"].createElement(semantic_ui_react_1.Segment, { stacked: true },
                            react_1["default"].createElement(react_router_dom_1.Switch, null,
                                react_1["default"].createElement(react_router_dom_1.Route, { path: ["/login", "/registration", "/restore-password"], render: function () {
                                        return (react_1["default"].createElement(semantic_ui_react_1.Form.Input, { fluid: true, icon: "user", iconPosition: "left", placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 E-mail", onChange: function (event) {
                                                var value = event.target.value;
                                                _this.setState(function (state) {
                                                    return __assign({}, state, { email: value });
                                                });
                                            } }));
                                    } })),
                            react_1["default"].createElement(react_router_dom_1.Switch, null,
                                react_1["default"].createElement(react_router_dom_1.Route, { path: "/restore-password-session", render: function () {
                                        var message = "На ваш email отправленно письмо с кодом подтверждения";
                                        return react_1["default"].createElement("p", { style: { color: "#86181d" } }, message);
                                    } })),
                            react_1["default"].createElement(react_router_dom_1.Switch, null,
                                react_1["default"].createElement(react_router_dom_1.Route, { path: "/restore-password-session", render: function () {
                                        return (react_1["default"].createElement(semantic_ui_react_1.Form.Input, { fluid: true, icon: "shield alternate", iconPosition: "left", placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0434 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F", onChange: function (event) {
                                                var value = event.target.value;
                                                _this.setState(function (state) {
                                                    return __assign({}, state, { email: value });
                                                });
                                            } }));
                                    } })),
                            react_1["default"].createElement(react_router_dom_1.Switch, null,
                                react_1["default"].createElement(react_router_dom_1.Route, { path: ["/login", "/registration"], render: function () {
                                        return (react_1["default"].createElement(FormInputEnterPassword, { onChange: function (event) {
                                                var value = event.target.value;
                                                _this.setState(function (state) {
                                                    return __assign({}, state, { password: value });
                                                });
                                            } }));
                                    } })),
                            react_1["default"].createElement(react_router_dom_1.Switch, null,
                                react_1["default"].createElement(react_router_dom_1.Route, { path: "/registration", render: function () { return (react_1["default"].createElement(FormInputRepeatPassword, { onChange: function (event) {
                                            var value = event.target.value;
                                            _this.setState(function (state) {
                                                return __assign({}, state, { repeatPassword: value });
                                            });
                                        } })); } })),
                            react_1["default"].createElement(react_router_dom_1.Switch, null,
                                react_1["default"].createElement(react_router_dom_1.Route, { path: "/registration", render: function () {
                                        var errorMessageRegistration = _this
                                            .state.errorMessageRegistration;
                                        if (!errorMessageRegistration) {
                                            errorMessageRegistration = _this.props
                                                .errorMessageRegistration;
                                        }
                                        if (errorMessageRegistration) {
                                            return (react_1["default"].createElement("p", { style: { color: "#86181d" } }, errorMessageRegistration));
                                        }
                                    } }),
                                react_1["default"].createElement(react_router_dom_1.Route, { path: "/login", render: function () {
                                        var errorMessageLogin = _this.state.errorMessageLogin;
                                        if (!errorMessageLogin) {
                                            errorMessageLogin = _this.props.errorMessageLogin;
                                        }
                                        if (errorMessageLogin) {
                                            return (react_1["default"].createElement("p", { style: { color: "#86181d" } }, errorMessageLogin));
                                        }
                                    } }),
                                react_1["default"].createElement(react_router_dom_1.Route, { path: "/restore-password", render: function () {
                                        var errorMessageRestorePass = _this
                                            .state.errorMessageRestorePass;
                                        if (!errorMessageRestorePass) {
                                            errorMessageRestorePass = _this.props
                                                .errorMessageRestorePass;
                                        }
                                        if (errorMessageRestorePass) {
                                            return (react_1["default"].createElement("p", { style: { color: "#86181d" } }, errorMessageRestorePass));
                                        }
                                    } })),
                            react_1["default"].createElement(react_router_dom_1.Switch, null,
                                react_1["default"].createElement(react_router_dom_1.Route, { path: ["/restore-password", "/restore-password-session"], component: ButtonSubmitRestorePassword }),
                                react_1["default"].createElement(react_router_dom_1.Route, { path: "/registration", component: ButtonSubmitRegistration }),
                                react_1["default"].createElement(react_router_dom_1.Route, { path: "/login", component: ButtonSubmitLogin })))),
                    react_1["default"].createElement(react_router_dom_1.Switch, null,
                        react_1["default"].createElement(react_router_dom_1.Route, { path: "/registration", component: MessageRegistration }),
                        react_1["default"].createElement(react_router_dom_1.Route, { path: "/login", component: MessageLogin })),
                    react_1["default"].createElement(react_router_dom_1.Switch, null,
                        react_1["default"].createElement(react_router_dom_1.Route, { path: "/registration", component: MessageLoginRestorePass }),
                        react_1["default"].createElement(react_router_dom_1.Route, { path: "/login", component: MessageLoginRestorePass })),
                    react_1["default"].createElement(react_router_dom_1.Switch, null,
                        react_1["default"].createElement(react_router_dom_1.Route, { path: "/restore-password-session", render: function () {
                                return (react_1["default"].createElement("div", { onClick: function () {
                                        _this.props.dispatch({
                                            type: "SET_RESTORE_PASSWORD_SESSION_ID",
                                            payload: {
                                                restorePasswordSessionId: "",
                                                errorStatus: false,
                                                errorText: ""
                                            }
                                        });
                                    } },
                                    " ",
                                    react_1["default"].createElement(MessageRestorePassSessionBack, null),
                                    " "));
                            } }))))));
    };
    Login.prototype.registrationFormValidate = function () {
        var status = true;
        var _a = this.state, email = _a.email, password = _a.password, repeatPassword = _a.repeatPassword;
        if (!(email && password && repeatPassword)) {
            this.setState(function (state) {
                return __assign({}, state, { errorMessageRegistration: "Введите корректные данные" });
            });
            return (status = false);
        }
        if (password !== repeatPassword) {
            this.setState(function (state) {
                return __assign({}, state, { errorMessageRegistration: "Пароли не совпадают" });
            });
            return (status = false);
        }
        return status;
    };
    Login.prototype.loginFormValidate = function () {
        var status = true;
        var _a = this.state, email = _a.email, password = _a.password;
        if (!(email && password)) {
            this.setState(function (state) {
                return __assign({}, state, { errorMessageLogin: "Введите корректные данные" });
            });
            return (status = false);
        }
        return status;
    };
    Login.prototype.restorePassFormValidate = function () {
        var status = true;
        var email = this.state.email;
        if (!email) {
            this.setState(function (state) {
                return __assign({}, state, { errorMessageRestorePass: "Введите корректные данные" });
            });
            return (status = false);
        }
        return status;
    };
    return Login;
}(react_1["default"].Component));
exports.Login = Login;
var HeaderSection = function (text) {
    return (react_1["default"].createElement(semantic_ui_react_1.Header, { as: "h2", color: "teal", textAlign: "center", style: {
            margin: "0 0",
            borderRadius: "2px",
            backgroundColor: "#44433e",
            paddingRight: "20px"
        } },
        react_1["default"].createElement(semantic_ui_react_1.Image, { src: "/img/logo.png" }),
        " ",
        text));
};
var FormInputPassword = function (placeholder, props) {
    return (react_1["default"].createElement(semantic_ui_react_1.Form.Input, { fluid: true, icon: "lock", iconPosition: "left", placeholder: placeholder, type: "password", onChange: props.onChange }));
};
var ButtonSubmit = function (text) {
    return (react_1["default"].createElement(semantic_ui_react_1.Button, { color: "teal", fluid: true, size: "large" }, text));
};
var MessageBox = function (text, linkTo, linkText) {
    return (react_1["default"].createElement(semantic_ui_react_1.Message, null,
        text,
        react_1["default"].createElement(react_router_dom_1.Link, { to: linkTo },
            " ",
            linkText)));
};
var FormInputEnterPassword = FormInputPassword.bind(null, "Введите пароль");
var FormInputRepeatPassword = FormInputPassword.bind(null, "Повторите пароль");
var ButtonSubmitRegistration = ButtonSubmit.bind(null, "Регистрация");
var ButtonSubmitLogin = ButtonSubmit.bind(null, "Войти");
var ButtonSubmitRestorePassword = ButtonSubmit.bind(null, "Восстановить");
var HeaderRegistration = HeaderSection.bind(null, "Зарегистрируйтесь");
var HeaderLogin = HeaderSection.bind(null, "Войдите в аккаунт");
var HeaderRestorePassword = HeaderSection.bind(null, "Восстановление пароля");
var MessageRegistration = MessageBox.bind(null, "Уже зарегистрированы?", "/login", "Войти");
var MessageLogin = MessageBox.bind(null, "Впервые на VotingPay?", "/registration", "Регистрация");
var MessageLoginRestorePass = MessageBox.bind(null, "Забыли пароль?", "/restore-password", "Восстановить");
var MessageRestorePassSessionBack = MessageBox.bind(null, "Письмо не пришло?", "/restore-password", "Попробуйте еще раз");
