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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var redux_1 = require("redux");
var react_redux_1 = require("react-redux");
var teamFactsItem_1 = __importDefault(require("../components/teamFactsItem"));
var actions = __importStar(require("../actions/teamFactsActions"));
var data = [
    {
        title: "Активных клиентов",
        favicon: react_1["default"].createElement("i", { className: "fa fa-user fa-2x" })
    },
    {
        title: "Создано голосований",
        favicon: react_1["default"].createElement("i", { className: "fas fa-poll fa-2x" })
    },
    {
        title: "Получено голосов",
        favicon: react_1["default"].createElement("i", { className: "fas fa-poll-h fa-2x" })
    },
    {
        title: "Выплаченно средств",
        favicon: react_1["default"].createElement("i", { className: "fas fa-money-bill-wave fa-2x" })
    }
];
var TeamFactsApp = /** @class */ (function (_super) {
    __extends(TeamFactsApp, _super);
    function TeamFactsApp(props) {
        var _this = _super.call(this, props) || this;
        _this.scrollHandler = _this.scrollHandler.bind(_this);
        return _this;
    }
    TeamFactsApp.prototype.componentWillMount = function () { };
    TeamFactsApp.prototype.componentDidMount = function () {
        document.addEventListener("scroll", this.scrollHandler);
    };
    TeamFactsApp.prototype.scrollHandler = function () {
        var teamFactsElem = document.querySelector(".team-facts");
        var top, bottom, headerOffset = 100;
        if (teamFactsElem) {
            top = teamFactsElem.getBoundingClientRect().top;
            bottom = teamFactsElem.getBoundingClientRect().bottom;
        }
        else {
            return;
        }
        if (top <= document.documentElement.clientHeight &&
            bottom >= headerOffset) {
            document.removeEventListener("scroll", this.scrollHandler);
            this.props.startCount(100);
        }
    };
    TeamFactsApp.prototype.render = function () {
        var _this = this;
        if (this.props.finished) {
            this.props.stopCount();
        }
        var items = data.map(function (item, index) {
            return (react_1["default"].createElement(teamFactsItem_1["default"], { key: index, title: item.title, number: _this.props.currNumber[index], favicon: item.favicon }));
        });
        return (react_1["default"].createElement("ul", { id: "contacts", className: "team-facts clearfix" }, items));
    };
    return TeamFactsApp;
}(react_1["default"].Component));
function mapStateToProps(state) {
    return {
        currNumber: state.teamFacts.currNumber,
        finished: state.teamFacts.finished
    };
}
function matchDispatchToProps(dispatch) {
    return redux_1.bindActionCreators({
        startCount: actions.startCount,
        stopCount: actions.stopCount
    }, dispatch);
}
exports["default"] = react_redux_1.connect(mapStateToProps, matchDispatchToProps)(TeamFactsApp);
