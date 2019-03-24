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
var sliderApp_1 = __importDefault(require("./../containers/sliderApp"));
var HomeSection = /** @class */ (function (_super) {
    __extends(HomeSection, _super);
    function HomeSection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HomeSection.prototype.render = function () {
        return (react_1["default"].createElement("section", { id: "home" },
            react_1["default"].createElement(sliderApp_1["default"], null),
            react_1["default"].createElement("ul", { className: "home-options clearfix" },
                react_1["default"].createElement("li", { className: "home-options-item" },
                    react_1["default"].createElement("div", { className: "option-item" }),
                    react_1["default"].createElement("p", { className: "option-text" }, "\u0421\u043E\u0437\u0434\u0430\u0432\u0430\u0439 \u0433\u043E\u043B\u043E\u0441\u043E\u0432\u0430\u043D\u0438\u044F")),
                react_1["default"].createElement("li", { className: "home-options-item" },
                    react_1["default"].createElement("div", { className: "option-item" }),
                    react_1["default"].createElement("h2", { className: "option-text" }, "\u041F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0439 \u043F\u043E\u0434\u043F\u0438\u0441\u0447\u0438\u043A\u0430\u043C \u0432\u044B\u0431\u043E\u0440")),
                react_1["default"].createElement("li", { className: "home-options-item" },
                    react_1["default"].createElement("div", { className: "option-item" }),
                    react_1["default"].createElement("h2", { className: "option-text" }, "\u041F\u043E\u0434\u043F\u0438\u0441\u0447\u0438\u043A\u0438 \u0433\u043E\u043B\u043E\u0441\u0443\u044E\u0442")),
                react_1["default"].createElement("li", { className: "home-options-item" },
                    react_1["default"].createElement("div", { className: "option-item" }),
                    react_1["default"].createElement("h2", { className: "option-text" }, "\u041F\u043E\u043B\u0443\u0447\u0430\u0439 \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u0443\u044E \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0443")))));
    };
    return HomeSection;
}(react_1["default"].Component));
exports["default"] = HomeSection;
