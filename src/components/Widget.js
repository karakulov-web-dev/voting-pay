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
//import AboutApp from "./../containers/aboutApp.jsx";
var Widget = /** @class */ (function (_super) {
    __extends(Widget, _super);
    function Widget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Widget.prototype.render = function () {
        return (react_1["default"].createElement("section", { id: "about" },
            react_1["default"].createElement("div", { className: "dark-bg about-container" },
                react_1["default"].createElement("div", { className: "container-fluid" },
                    react_1["default"].createElement("div", { className: "row" },
                        react_1["default"].createElement("div", { className: "col-xs-12 col-md-6 about-poster-container" },
                            react_1["default"].createElement("div", { className: "about-poster" },
                                react_1["default"].createElement("img", { src: "img/about-img.jpeg" }))),
                        react_1["default"].createElement("div", { className: "container" },
                            react_1["default"].createElement("div", { className: "row" },
                                react_1["default"].createElement("div", { className: "col-xs-12 col-md-6" },
                                    react_1["default"].createElement("div", { className: "title-content" },
                                        react_1["default"].createElement("h1", null, "\u0414\u043E\u0431\u0430\u0432\u044C \u0432\u0438\u0434\u0436\u0435\u0442"),
                                        react_1["default"].createElement("hr", null),
                                        react_1["default"].createElement("hr", null)),
                                    react_1["default"].createElement("div", null, "content")))))))));
    };
    return Widget;
}(react_1["default"].Component));
exports.Widget = Widget;
