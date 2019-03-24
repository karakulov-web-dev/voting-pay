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
var react_router_dom_1 = require("react-router-dom");
var AboutItems_1 = require("./AboutItems");
var AboutSection = /** @class */ (function (_super) {
    __extends(AboutSection, _super);
    function AboutSection(props) {
        return _super.call(this, props) || this;
    }
    AboutSection.prototype.render = function () {
        return (react_1["default"].createElement(react_router_dom_1.Switch, null,
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/about/voting", component: AboutItems_1.AboutItem_voting }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/about/how-use", component: AboutItems_1.AboutItem_how_use }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/about/get-money", component: AboutItems_1.AboutItem_get_money }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/about", component: AboutItems_1.AboutItem }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/", component: AboutItems_1.AboutItem })));
    };
    return AboutSection;
}(react_1["default"].Component));
exports.AboutSection = AboutSection;
