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
var Footer = /** @class */ (function (_super) {
    __extends(Footer, _super);
    function Footer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Footer.prototype.render = function () {
        var scrollOptions = {
            duration: 1000,
            offset: -100,
            smooth: true,
            spy: true
        };
        return (react_1["default"].createElement("footer", null,
            react_1["default"].createElement("div", { className: "dark-bg-tone" },
                react_1["default"].createElement("div", { className: "container footer-container", style: {
                        height: "175px"
                    } },
                    react_1["default"].createElement("p", { className: "footer-text" },
                        "Copyright 2019 | Voting",
                        react_1["default"].createElement("a", { className: "text-highlight", href: "javascript:void(0)" }, "Pay"),
                        " "),
                    react_1["default"].createElement(react_scroll_1.Link, __assign({ className: "footer-btn", to: "home" }, scrollOptions),
                        react_1["default"].createElement("i", { className: "fa fa-angle-up" }))))));
    };
    return Footer;
}(react_1["default"].Component));
exports.Footer = Footer;
