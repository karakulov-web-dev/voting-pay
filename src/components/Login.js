"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var semantic_ui_react_1 = require("semantic-ui-react");
var react_router_dom_1 = require("react-router-dom");
exports.Login = function () { return (react_1["default"].createElement("div", { className: "login-form" },
    react_1["default"].createElement("style", null, "\n      body > div,\n      body > div > div,\n      body > div > div > div.login-form {\n        height: 100%;\n      }\n    "),
    react_1["default"].createElement(semantic_ui_react_1.Grid, { textAlign: "center", style: { height: "100%" }, verticalAlign: "middle" },
        react_1["default"].createElement(semantic_ui_react_1.Grid.Column, { style: { maxWidth: 450 } },
            react_1["default"].createElement(HeaderLogin, null),
            react_1["default"].createElement(semantic_ui_react_1.Form, { size: "large" },
                react_1["default"].createElement(semantic_ui_react_1.Segment, { stacked: true },
                    react_1["default"].createElement(semantic_ui_react_1.Form.Input, { fluid: true, icon: "user", iconPosition: "left", placeholder: "E-mail address" }),
                    react_1["default"].createElement(semantic_ui_react_1.Form.Input, { fluid: true, icon: "lock", iconPosition: "left", placeholder: "Password", type: "password" }),
                    react_1["default"].createElement(semantic_ui_react_1.Button, { color: "teal", fluid: true, size: "large" }, "\u0412\u043E\u0439\u0442\u0438"))),
            react_1["default"].createElement(semantic_ui_react_1.Message, null,
                "\u0412\u043F\u0435\u0440\u0432\u044B\u0435 \u043D\u0430 VotingPay?",
                react_1["default"].createElement(react_router_dom_1.Link, { to: "/registration" }, " \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F")))))); };
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
var HeaderLogin = HeaderSection.bind(null, "Войдите в аккаунт");
var HeaderRegistration = function () { };
