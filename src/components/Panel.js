"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var Auth_1 = __importDefault(require("../containers/Auth"));
var react_1 = __importDefault(require("react"));
function Panel() {
    return (react_1["default"].createElement(Auth_1["default"], null,
        react_1["default"].createElement("div", null, "Panel")));
}
exports.Panel = Panel;
