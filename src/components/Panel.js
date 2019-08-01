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
var Auth_1 = __importDefault(require("../containers/Auth"));
var react_1 = __importStar(require("react"));
var semantic_ui_react_1 = require("semantic-ui-react");
var style = {
    minHeight: "calc(100vh)"
};
var VerticalSidebar = function (_a) {
    var animation = _a.animation, direction = _a.direction, visible = _a.visible;
    return (react_1["default"].createElement(semantic_ui_react_1.Sidebar, { as: semantic_ui_react_1.Menu, animation: animation, direction: direction, icon: "labeled", inverted: true, vertical: true, visible: visible, width: "thin" },
        react_1["default"].createElement(semantic_ui_react_1.Menu.Item, { as: "a" },
            react_1["default"].createElement(semantic_ui_react_1.Icon, { name: "home" }),
            "Home"),
        react_1["default"].createElement(semantic_ui_react_1.Menu.Item, { as: "a" },
            react_1["default"].createElement(semantic_ui_react_1.Icon, { name: "gamepad" }),
            "Games"),
        react_1["default"].createElement(semantic_ui_react_1.Menu.Item, { as: "a" },
            react_1["default"].createElement(semantic_ui_react_1.Icon, { name: "camera" }),
            "Channels")));
};
var SidebarExampleTransitions = /** @class */ (function (_super) {
    __extends(SidebarExampleTransitions, _super);
    function SidebarExampleTransitions() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            animation: "overlay",
            direction: "left",
            dimmed: false,
            visible: false
        };
        _this.handleAnimationChange = function (animation) { return function () {
            return _this.setState(function (prevState) { return ({
                animation: animation,
                visible: !prevState.visible
            }); });
        }; };
        _this.handleDirectionChange = function (direction) { return function () {
            return _this.setState({ direction: direction, visible: false });
        }; };
        return _this;
    }
    SidebarExampleTransitions.prototype.render = function () {
        var _a = this.state, animation = _a.animation, dimmed = _a.dimmed, direction = _a.direction, visible = _a.visible;
        return (react_1["default"].createElement("div", null,
            react_1["default"].createElement(semantic_ui_react_1.Sidebar.Pushable, { as: semantic_ui_react_1.Segment, style: { border: "none" } },
                react_1["default"].createElement(VerticalSidebar, { animation: animation, direction: direction, visible: visible }),
                react_1["default"].createElement(semantic_ui_react_1.Sidebar.Pusher, { dimmed: dimmed && visible, style: style },
                    react_1["default"].createElement(semantic_ui_react_1.Segment, { basic: true, style: { padding: "0px" } },
                        react_1["default"].createElement(semantic_ui_react_1.Container, { fluid: true, style: {
                                background: "#1b1c1d",
                                padding: "17px"
                            } },
                            react_1["default"].createElement(semantic_ui_react_1.Button, { onClick: this.handleAnimationChange("push"), icon: true, style: { position: "relative" } },
                                react_1["default"].createElement(semantic_ui_react_1.Icon, { name: "sidebar" }))),
                        react_1["default"].createElement(semantic_ui_react_1.Header, { as: "h3" }, "Application Content"),
                        react_1["default"].createElement(semantic_ui_react_1.Image, { src: "https://react.semantic-ui.com/images/wireframe/paragraph.png" }))))));
    };
    return SidebarExampleTransitions;
}(react_1.Component));
function Panel() {
    return (react_1["default"].createElement(Auth_1["default"], null,
        react_1["default"].createElement(SidebarExampleTransitions, null)));
}
exports.Panel = Panel;
