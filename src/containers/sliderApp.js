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
var sliderItem1_js_1 = __importDefault(require("../components/slider/sliderItem1.js"));
var sliderItem2_js_1 = __importDefault(require("../components/slider/sliderItem2.js"));
var sliderItem3_js_1 = __importDefault(require("../components/slider/sliderItem3.js"));
var actions = __importStar(require("../actions/sliderActions"));
var SliderApp = /** @class */ (function (_super) {
    __extends(SliderApp, _super);
    function SliderApp(props) {
        var _this = _super.call(this, props) || this;
        _this.switchNextSlide = _this.switchNextSlide.bind(_this);
        _this.switchPrevSlide = _this.switchPrevSlide.bind(_this);
        return _this;
    }
    SliderApp.prototype.componentDidMount = function () {
        this.props.switchAuto();
    };
    // eslint-disable-next-line react/no-typos
    SliderApp.prototype.componentWillUnMount = function () {
        // This action will clear timers
        this.props.switchToSlide();
    };
    SliderApp.prototype.switchNextSlide = function () {
        if (this.props.hiddenChange)
            return;
        this.props.switchToSlide("next");
        this.props.switchAutoEnable();
    };
    SliderApp.prototype.switchPrevSlide = function () {
        if (this.props.hiddenChange)
            return;
        this.props.switchToSlide("prev");
        this.props.switchAutoEnable();
    };
    SliderApp.prototype.render = function () {
        if (this.props.hiddenChange) {
            this.props.switchTimeoutHidden(this.props.transitionDuration);
        }
        var sliderOffset = this.props.currSlide * this.props.sliderWidth;
        var sliderOptions = {
            transform: "translate3d(" + -sliderOffset + "px, 0px, 0px)",
            transitionDuration: this.props.transitionDuration + "ms"
        };
        return (react_1["default"].createElement("div", { className: "slider-container" },
            react_1["default"].createElement("div", { className: "container" },
                react_1["default"].createElement("div", { className: "slider-nav-container" },
                    react_1["default"].createElement("span", { className: "slider-nav-left", onClick: this.switchPrevSlide },
                        react_1["default"].createElement("i", { className: "fa fa-angle-left", style: { fontSize: "40px" } })),
                    react_1["default"].createElement("span", { className: "slider-nav-right", onClick: this.switchNextSlide },
                        react_1["default"].createElement("i", { className: "fa fa-angle-right", style: { fontSize: "40px" } })))),
            react_1["default"].createElement("ul", { style: sliderOptions, className: "slider" },
                react_1["default"].createElement(sliderItem3_js_1["default"], null),
                react_1["default"].createElement(sliderItem1_js_1["default"], null),
                react_1["default"].createElement(sliderItem2_js_1["default"], null),
                react_1["default"].createElement(sliderItem3_js_1["default"], null),
                react_1["default"].createElement(sliderItem1_js_1["default"], null))));
    };
    return SliderApp;
}(react_1["default"].Component));
function mapStateToProps(state) {
    return {
        currSlide: state.slider.currSlide,
        transitionDuration: state.slider.transitionDuration,
        sliderWidth: state.slider.sliderWidth,
        hiddenChange: state.slider.hiddenChange
    };
}
function matchDispatchToProps(dispatch) {
    return redux_1.bindActionCreators({
        switchToSlide: actions.switchToSlide,
        switchTimeoutHidden: actions.switchTimeoutHidden,
        switchAuto: actions.switchAuto,
        switchAutoEnable: actions.switchAutoEnable
    }, dispatch);
}
exports["default"] = react_redux_1.connect(mapStateToProps, matchDispatchToProps)(SliderApp);
