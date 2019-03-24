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
var TeamFactsItem = /** @class */ (function (_super) {
    __extends(TeamFactsItem, _super);
    function TeamFactsItem(props) {
        return _super.call(this, props) || this;
    }
    TeamFactsItem.prototype.render = function () {
        return (react_1["default"].createElement("li", { className: "team-facts-item" },
            react_1["default"].createElement("div", { className: "fact-circle" }, this.props.favicon),
            react_1["default"].createElement("p", { className: "fact-number" }, this.props.number),
            react_1["default"].createElement("h2", { className: "fact-title" }, this.props.title)));
    };
    return TeamFactsItem;
}(react_1["default"].Component));
exports["default"] = TeamFactsItem;
