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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var Header_1 = __importDefault(require("./components/Header"));
var HomeSection_1 = __importDefault(require("./components/HomeSection"));
var About_1 = require("./components/About");
var Facts_1 = __importDefault(require("./containers/Facts"));
var Footer_1 = require("./components/Footer");
var Contacts_1 = require("./components/Contacts");
var Login_1 = require("./components/Login");
var Panel_1 = require("./components/Panel");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (react_1["default"].createElement("div", null,
            react_1["default"].createElement(react_router_dom_1.Switch, null,
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/panel", component: Panel_1.Panel }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/login", component: Login_1.Login }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/registration", component: Login_1.Login }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/voting", component: Voting }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/about", component: Landing }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/", component: Landing }))));
    };
    return App;
}(react_1.Component));
function Landing() {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(Header_1["default"], null),
        react_1["default"].createElement(HomeSection_1["default"], null),
        react_1["default"].createElement(About_1.About, null),
        react_1["default"].createElement(Facts_1["default"], null),
        react_1["default"].createElement(Contacts_1.Contacts, null),
        react_1["default"].createElement(Footer_1.Footer, null)));
}
function Voting() {
    return react_1["default"].createElement("h2", null, "Voting");
}
exports["default"] = App;
