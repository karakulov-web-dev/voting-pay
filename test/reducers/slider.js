"use strict";
exports.__esModule = true;
var slider_1 = require("../../src/reducers/slider");
var chai_1 = require("chai");
describe("reducers/slider ", function () {
    describe("CHANGE_SLIDE() ", function () {
        it("should increase currSlide by 1", function () {
            var state = {};
            var initialCurrSlide = 0;
            state.slider = {
                currSlide: initialCurrSlide,
                transitionDuration: 0,
                sliderWidth: 0,
                hiddenChange: true,
                slidesCount: 3
            };
            state = slider_1.CHANGE_SLIDE(state, { type: "CHANGE_SLIDE", payload: "next" });
            chai_1.assert.strictEqual(state.slider.currSlide, initialCurrSlide + 1);
        });
        it("currSlide should be reduced by 1", function () {
            var state = {};
            var initialCurrSlide = 0;
            state.slider = {
                currSlide: initialCurrSlide,
                transitionDuration: 0,
                sliderWidth: 0,
                hiddenChange: true,
                slidesCount: 3
            };
            state = slider_1.CHANGE_SLIDE(state, { type: "CHANGE_SLIDE", payload: "prev" });
            chai_1.assert.strictEqual(state.slider.currSlide, initialCurrSlide - 1);
        });
        it("hiddenChange should be true if currSlide > slidesCount", function () {
            var state = {};
            state.slider = {
                currSlide: 3,
                transitionDuration: 0,
                sliderWidth: 0,
                hiddenChange: false,
                slidesCount: 3
            };
            state = slider_1.CHANGE_SLIDE(state, {
                type: "CHANGE_SLIDE",
                payload: "next"
            });
            chai_1.assert.isTrue(state.slider.hiddenChange);
        });
        it("hiddenChange should be true if currSlide == 0", function () {
            var state = {};
            state.slider = {
                currSlide: 1,
                transitionDuration: 0,
                sliderWidth: 0,
                hiddenChange: false,
                slidesCount: 3
            };
            state = slider_1.CHANGE_SLIDE(state, {
                type: "CHANGE_SLIDE",
                payload: "prev"
            });
            chai_1.assert.isTrue(state.slider.hiddenChange);
        });
    });
    describe("CHANGE_SLIDE_HIDDEN() ", function () {
        it("should set transitionDuration 0 ", function () {
            var state = {};
            state.slider = {
                currSlide: 1,
                transitionDuration: 1,
                sliderWidth: 0,
                hiddenChange: false,
                slidesCount: 3
            };
            state = slider_1.CHANGE_SLIDE_HIDDEN(state);
            chai_1.assert.strictEqual(state.slider.transitionDuration, 0);
        });
        it("should set hiddenChange false ", function () {
            var state = {};
            state.slider = {
                currSlide: 1,
                transitionDuration: 1,
                sliderWidth: 0,
                hiddenChange: true,
                slidesCount: 3
            };
            state = slider_1.CHANGE_SLIDE_HIDDEN(state);
            chai_1.assert.isFalse(state.slider.hiddenChange);
        });
        it("should set currSlide 1 or slidesCount ", function () {
            var state = {};
            var slidesCount = 3;
            state.slider = {
                currSlide: 0,
                transitionDuration: 1,
                sliderWidth: 0,
                hiddenChange: true,
                slidesCount: slidesCount
            };
            state = slider_1.CHANGE_SLIDE_HIDDEN(state);
            chai_1.assert.strictEqual(state.slider.currSlide, 3, "if currSlide was 0 ");
            state = slider_1.CHANGE_SLIDE_HIDDEN(state);
            chai_1.assert.strictEqual(state.slider.currSlide, 1);
        });
    });
});
