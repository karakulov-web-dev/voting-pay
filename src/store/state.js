"use strict";
exports.__esModule = true;
/**
 * Начальная ширина для слайдера.
 * Проверка на наличие document выполнена с целью возможностью запуска тестов в среде node.
 */
var INITIAL_CLIENT_WIDTH_SLIDER = 0;
try {
    INITIAL_CLIENT_WIDTH_SLIDER = document
        ? document.documentElement.clientWidth
        : 0;
}
catch (e) { }
var state = {
    User: {
        authStatus: false
    },
    slider: {
        currSlide: 1,
        transitionDuration: 1000,
        sliderWidth: INITIAL_CLIENT_WIDTH_SLIDER,
        hiddenChange: false,
        slidesCount: 3
    },
    teamFacts: {
        currNumber: [0, 0, 0, 0],
        finishNumber: [273, 831, 4112, 213958],
        incValues: [8, 20, 40, 2000],
        finished: false
    },
    loginForm: {
        errorMessageLogin: "",
        errorMessageRegistration: ""
    }
};
exports.state = state;
