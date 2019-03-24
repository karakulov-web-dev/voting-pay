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
var react_scroll_1 = require("react-scroll");
// 'react-scroll' have bugs with active class, todo: fix
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Header.prototype.componentDidMount = function () {
        react_scroll_1.scrollSpy.update();
    };
    Header.prototype.render = function () {
        var options = {
            duration: 1000,
            offset: -100,
            smooth: true,
            spy: true,
            activeClass: "nav-active"
        };
        return (react_1["default"].createElement("div", null,
            react_1["default"].createElement("header", { id: "header" },
                react_1["default"].createElement("div", { className: "container" },
                    react_1["default"].createElement("div", { className: "logo-container" },
                        react_1["default"].createElement(react_scroll_1.Link, __assign({ style: { cursor: "pointer" }, to: "home" }, options, { activeClass: "" }),
                            react_1["default"].createElement("span", { className: "logo-img", style: {
                                    backgroundSize: "contain",
                                    position: "relative",
                                    top: "5px"
                                } }),
                            react_1["default"].createElement("span", { className: "logo-text logo-text-part1" }, "Voting"),
                            react_1["default"].createElement("span", { className: "logo-text logo-text-part2" }, "Pay"))),
                    react_1["default"].createElement("nav", { className: "nav-main" },
                        react_1["default"].createElement("ul", null,
                            react_1["default"].createElement("li", null,
                                react_1["default"].createElement(react_scroll_1.Link, __assign({ to: "home" }, options), "\u0413\u043B\u0430\u0432\u043D\u0430\u044F")),
                            react_1["default"].createElement("li", null,
                                react_1["default"].createElement(react_scroll_1.Link, __assign({ to: "service" }, options), "\u041E \u0441\u0435\u0440\u0432\u0438\u0441\u0435")),
                            react_1["default"].createElement("li", null,
                                react_1["default"].createElement(react_scroll_1.Link, __assign({ to: "contacts" }, options), "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B")),
                            react_1["default"].createElement("li", null,
                                react_1["default"].createElement(react_scroll_1.Link, __assign({ to: "team" }, options), "\u0412\u0445\u043E\u0434"))))))));
    };
    return Header;
}(react_1["default"].Component));
exports["default"] = Header;
