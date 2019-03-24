"use strict";
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
exports.__esModule = true;
function CHANGE_SLIDE(state, action) {
    var width;
    try {
        width = document.documentElement.clientWidth;
    }
    catch (_a) {
        width = 100;
    }
    var hiddenChange = false;
    var slider = state.slider;
    var nextSlide = slider.currSlide + 1;
    if (action.payload === "prev") {
        nextSlide = slider.currSlide - 1;
    }
    if (nextSlide == 0 || nextSlide == slider.slidesCount + 1) {
        hiddenChange = true;
    }
    slider.currSlide = nextSlide;
    slider.hiddenChange = hiddenChange;
    slider.sliderWidth = width;
    slider.transitionDuration = 1000;
    return __assign({}, state, { slider: slider });
}
exports.CHANGE_SLIDE = CHANGE_SLIDE;
function CHANGE_SLIDE_HIDDEN(state) {
    var slider = state.slider;
    var nextSlide = 1;
    if (slider.currSlide == 0) {
        nextSlide = slider.slidesCount;
    }
    slider.currSlide = nextSlide;
    slider.hiddenChange = false;
    slider.transitionDuration = 0;
    return __assign({}, state, { slider: __assign({}, slider) });
}
exports.CHANGE_SLIDE_HIDDEN = CHANGE_SLIDE_HIDDEN;
