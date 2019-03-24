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
var style = {
    margin: "0px 0px",
    padding: "5px",
    width: "100%",
    fontSize: "20px",
    textAlign: "center",
    wordWrap: "break-word"
};
var styleSpan = {
    fontWeight: "bold"
};
var Contacts = /** @class */ (function (_super) {
    __extends(Contacts, _super);
    function Contacts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Contacts.prototype.render = function () {
        return (react_1["default"].createElement("section", { id: "contacts" },
            react_1["default"].createElement("div", { className: "light-bg section-offset-bottom" },
                react_1["default"].createElement("div", { className: "container" },
                    react_1["default"].createElement("div", { className: "title-content" },
                        react_1["default"].createElement("h1", null, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"),
                        react_1["default"].createElement("hr", null),
                        react_1["default"].createElement("hr", null),
                        react_1["default"].createElement("div", { style: {
                                width: "50%",
                                margin: "auto",
                                marginTop: "20px"
                            } },
                            " ",
                            react_1["default"].createElement("p", { className: "service-content-text", style: style },
                                react_1["default"].createElement("span", { style: styleSpan }, "C\u043B\u0443\u0436\u0431\u0430 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438:"),
                                " ",
                                "karakulov.web.deb@gmail.com"),
                            react_1["default"].createElement("p", { className: "service-content-text", style: style },
                                react_1["default"].createElement("span", { style: styleSpan }, "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F:"),
                                " ",
                                "karakulov.web.deb@gmail.com"),
                            react_1["default"].createElement("p", { className: "service-content-text", style: style },
                                react_1["default"].createElement("span", { style: styleSpan }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D:"),
                                " 8-905-066-99-31")))))));
    };
    return Contacts;
}(react_1["default"].Component));
exports.Contacts = Contacts;
