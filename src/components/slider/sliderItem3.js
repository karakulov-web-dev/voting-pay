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
var SliderItem3 = /** @class */ (function (_super) {
    __extends(SliderItem3, _super);
    function SliderItem3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SliderItem3.prototype.render = function () {
        var scrollOptions = {
            duration: 1000,
            offset: -100,
            smooth: true,
            spy: true
        };
        var sliderItemBg = {
            background: 'linear-gradient(to bottom, rgba(30, 30, 30, .5) 0%, rgba(30, 30, 30, .5) 100%), url("./img/home-bg3.jpg") no-repeat center',
            backgroundSize: "cover"
        };
        return (react_1["default"].createElement("li", { className: "slider-item", style: sliderItemBg },
            react_1["default"].createElement("div", { className: "slider-content" },
                react_1["default"].createElement("div", { className: "container slider-content-container" },
                    react_1["default"].createElement("h1", { className: "slider-text1" }, "\u0417\u0430\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0439"),
                    react_1["default"].createElement("h2", { className: "slider-text2" }, "\u0411\u043E\u043B\u044C\u0448\u0435 \u043F\u0440\u0438\u0431\u044B\u043B\u044C"),
                    react_1["default"].createElement("p", { className: "slider-text3" }, "\u0414\u0430\u0439 \u0440\u0430\u0437\u0443\u043C\u043D\u044B\u0439 \u0441\u043F\u043E\u0441\u043E\u0431 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u0442\u0435\u0431\u044F"),
                    react_1["default"].createElement("div", { className: "slider-btn-container" },
                        react_1["default"].createElement(react_scroll_1.Link, __assign({ className: "btn home-btn", to: "work" }, scrollOptions), "\u0412\u043E\u0439\u0442\u0438 \u0438 \u041D\u0430\u0447\u0430\u0442\u044C"))))));
    };
    return SliderItem3;
}(react_1["default"].Component));
exports["default"] = SliderItem3;
