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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var Auth_1 = __importDefault(require("../containers/Auth"));
var react_1 = __importStar(require("react"));
var semantic_ui_react_1 = require("semantic-ui-react");
var style = {
    minHeight: "calc(100vh)"
};
var VerticalSidebar = function (_a) {
    var animation = _a.animation, direction = _a.direction, visible = _a.visible, logOut = _a.logOut;
    return (react_1["default"].createElement(semantic_ui_react_1.Sidebar, { as: semantic_ui_react_1.Menu, animation: animation, direction: direction, icon: "labeled", inverted: true, vertical: true, visible: visible, width: "thin", style: { paddingTop: "109px" } },
        react_1["default"].createElement(react_router_dom_1.Route, { render: function (_a) {
                var history = _a.history;
                return (react_1["default"].createElement(semantic_ui_react_1.Menu.Item, { as: "a", active: history.location.pathname === "/panel" ||
                        history.location.pathname === "/panel/tool", onClick: function () {
                        history.push("/panel/tool");
                    } },
                    react_1["default"].createElement(semantic_ui_react_1.Icon, { name: "wrench" }),
                    "\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B"));
            } }),
        react_1["default"].createElement(react_router_dom_1.Route, { render: function (_a) {
                var history = _a.history;
                return (react_1["default"].createElement(semantic_ui_react_1.Menu.Item, { as: "a", active: history.location.pathname === "/panel/info", onClick: function () {
                        history.push("/panel/info");
                    } },
                    react_1["default"].createElement(semantic_ui_react_1.Icon, { name: "info" }),
                    "\u0421\u043F\u0440\u0430\u0432\u043A\u0430"));
            } }),
        react_1["default"].createElement(react_router_dom_1.Route, { render: function (_a) {
                var history = _a.history;
                return (react_1["default"].createElement(semantic_ui_react_1.Menu.Item, { as: "a", active: history.location.pathname === "/panel/balance", onClick: function () {
                        history.push("/panel/balance");
                    } },
                    react_1["default"].createElement(semantic_ui_react_1.Icon, { name: "money" }),
                    "\u0411\u0430\u043B\u0430\u043D\u0441"));
            } }),
        react_1["default"].createElement(react_router_dom_1.Route, { render: function (_a) {
                var history = _a.history;
                return (react_1["default"].createElement(semantic_ui_react_1.Menu.Item, { as: "a", active: history.location.pathname === "/panel/deals", onClick: function () {
                        history.push("/panel/deals");
                    } },
                    react_1["default"].createElement(semantic_ui_react_1.Icon, { name: "briefcase" }),
                    "\u0421\u0434\u0435\u043B\u043A\u0438"));
            } }),
        react_1["default"].createElement(react_router_dom_1.Route, { render: function (_a) {
                var history = _a.history;
                return (react_1["default"].createElement(semantic_ui_react_1.Menu.Item, { as: "a", active: history.location.pathname === "/panel/message", onClick: function () {
                        history.push("/panel/message");
                    } },
                    react_1["default"].createElement(semantic_ui_react_1.Icon, { name: "envelope" }),
                    "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F"));
            } }),
        react_1["default"].createElement(react_router_dom_1.Route, { render: function (_a) {
                var history = _a.history;
                return (react_1["default"].createElement(semantic_ui_react_1.Menu.Item, { as: "a", active: history.location.pathname === "/panel/setting", onClick: function () {
                        history.push("/panel/setting");
                    } },
                    react_1["default"].createElement(semantic_ui_react_1.Icon, { name: "setting" }),
                    "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438"));
            } }),
        react_1["default"].createElement(semantic_ui_react_1.Menu.Item, { as: "a", onClick: function () {
                logOut();
            } },
            react_1["default"].createElement(semantic_ui_react_1.Icon, { name: "log out" }),
            "\u0412\u044B\u0445\u043E\u0434")));
};
var SidebarPanel = /** @class */ (function (_super) {
    __extends(SidebarPanel, _super);
    function SidebarPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            animation: "push",
            direction: "left",
            dimmed: false,
            visible: true
        };
        _this.handleAnimationChange = function (animation) { return function () {
            return _this.setState(function (prevState) { return ({
                animation: animation,
                visible: !prevState.visible
            }); });
        }; };
        _this.handleDirectionChange = function (direction) { return function () {
            return _this.setState({ direction: direction, visible: true });
        }; };
        return _this;
    }
    SidebarPanel.prototype.render = function () {
        var _this = this;
        var _a = this.state, animation = _a.animation, dimmed = _a.dimmed, direction = _a.direction, visible = _a.visible;
        return (react_1["default"].createElement("div", null,
            react_1["default"].createElement(semantic_ui_react_1.Sidebar.Pushable, { as: semantic_ui_react_1.Segment, style: { border: "none" } },
                react_1["default"].createElement(VerticalSidebar, { animation: animation, direction: direction, visible: visible, logOut: this.props.logOut }),
                react_1["default"].createElement(semantic_ui_react_1.Sidebar.Pusher, { dimmed: dimmed && visible, style: style },
                    react_1["default"].createElement(semantic_ui_react_1.Segment, { basic: true, style: { padding: "0px" } },
                        react_1["default"].createElement("div", { style: {
                                background: "#1b1c1d",
                                padding: "20px"
                            } },
                            react_1["default"].createElement(semantic_ui_react_1.Button, { onClick: this.handleAnimationChange("push"), icon: true, style: { position: "relative" } },
                                react_1["default"].createElement(semantic_ui_react_1.Icon, { name: "sidebar" })),
                            react_1["default"].createElement("span", null,
                                react_1["default"].createElement("span", { className: "logo-img", style: {
                                        backgroundSize: "contain",
                                        position: "relative",
                                        top: "5px",
                                        marginLeft: "20px"
                                    } }),
                                react_1["default"].createElement("span", { className: "logo-text logo-text-part1" }, "Voting"),
                                react_1["default"].createElement("span", { className: "logo-text logo-text-part2" }, "Pay")),
                            react_1["default"].createElement(semantic_ui_react_1.Button, { onClick: function () {
                                    _this.props.logOut();
                                }, icon: true, style: { position: "fixed", right: "50px", top: "35px" } },
                                react_1["default"].createElement(semantic_ui_react_1.Icon, { name: "log out" }))),
                        react_1["default"].createElement(semantic_ui_react_1.Header, { as: "h3" }, "Application Content"),
                        react_1["default"].createElement(semantic_ui_react_1.Image, { src: "https://react.semantic-ui.com/images/wireframe/paragraph.png" }))))));
    };
    return SidebarPanel;
}(react_1.Component));
var mapDispatchToProps = function (dispatch) {
    return {
        logOut: function () {
            localStorage.removeItem("AccessToken");
            dispatch({
                type: "CHANGE_AUTH_STATUS",
                payload: false
            });
        }
    };
};
var PanelContainer = react_redux_1.connect(null, mapDispatchToProps)(SidebarPanel);
function Panel() {
    return (react_1["default"].createElement(Auth_1["default"], null,
        react_1["default"].createElement(PanelContainer, null)));
}
exports.Panel = Panel;
