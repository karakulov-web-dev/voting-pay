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
var AboutSection_1 = require("./AboutSection");
var react_router_dom_1 = require("react-router-dom");
var About = /** @class */ (function (_super) {
    __extends(About, _super);
    function About(props) {
        var _this = _super.call(this, props) || this;
        _this.linkClick = _this.linkClick.bind(_this);
        return _this;
    }
    About.prototype.linkClick = function (num) {
        var activeLink = document.querySelector(".service-nav-item.active");
        if (activeLink) {
            activeLink.classList.remove("active");
        }
        document.querySelectorAll(".service-nav-item")[num].classList.add("active");
    };
    About.prototype.render = function () {
        var _this = this;
        return (react_1["default"].createElement("section", { id: "service" },
            react_1["default"].createElement("div", { className: "light-bg section-offset-bottom" },
                react_1["default"].createElement("div", { className: "container" },
                    react_1["default"].createElement("div", { className: "title-content" },
                        react_1["default"].createElement("h1", null, "\u041E \u0441\u0435\u0440\u0432\u0438\u0441\u0435"),
                        react_1["default"].createElement("hr", null),
                        react_1["default"].createElement("hr", null)),
                    react_1["default"].createElement("div", { className: "service-nav-container" },
                        react_1["default"].createElement("ul", { className: "service-nav" },
                            react_1["default"].createElement("li", { className: "service-nav-item active", onClick: function () { return _this.linkClick(0); } },
                                react_1["default"].createElement(react_router_dom_1.Link, { to: "/about" },
                                    react_1["default"].createElement("span", null, "\u041E \u0441\u0435\u0440\u0432\u0438\u0441\u0435"))),
                            react_1["default"].createElement("li", { className: "service-nav-item", onClick: function () { return _this.linkClick(1); } },
                                react_1["default"].createElement(react_router_dom_1.Link, { to: "/about/voting" },
                                    react_1["default"].createElement("span", null, "\u0413\u043E\u043B\u043E\u0441\u043E\u0432\u0430\u043D\u0438\u044F"))),
                            react_1["default"].createElement("li", { className: "service-nav-item", onClick: function () { return _this.linkClick(2); } },
                                react_1["default"].createElement(react_router_dom_1.Link, { to: "/about/how-use" },
                                    react_1["default"].createElement("span", null, "\u041A\u0430\u043A \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F"))),
                            react_1["default"].createElement("li", { className: "service-nav-item", onClick: function () { return _this.linkClick(3); } },
                                react_1["default"].createElement(react_router_dom_1.Link, { to: "/about/get-money" },
                                    react_1["default"].createElement("span", null, "\u0421\u043D\u044F\u0442\u0438\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432"))))),
                    react_1["default"].createElement(AboutSection_1.AboutSection, null)))));
    };
    return About;
}(react_1["default"].Component));
exports.About = About;
