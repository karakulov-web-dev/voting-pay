import { CHANGE_SLIDE, CHANGE_SLIDE_HIDDEN } from "../../src/reducers/slider";
import { State } from "../../src/store/state";
import { assert } from "chai";

describe("reducers/slider ", function() {
  describe("CHANGE_SLIDE() ", function() {
    it("should increase currSlide by 1", function() {
      let state: State = {} as State;
      let initialCurrSlide = 0;
      state.slider = {
        currSlide: initialCurrSlide,
        transitionDuration: 0,
        sliderWidth: 0,
        hiddenChange: true,
        slidesCount: 3
      };
      state = CHANGE_SLIDE(state, { type: "CHANGE_SLIDE", payload: "next" });
      assert.strictEqual(state.slider.currSlide, initialCurrSlide + 1);
    });

    it("currSlide should be reduced by 1", function() {
      let state: State = {} as State;
      let initialCurrSlide = 0;
      state.slider = {
        currSlide: initialCurrSlide,
        transitionDuration: 0,
        sliderWidth: 0,
        hiddenChange: true,
        slidesCount: 3
      };
      state = CHANGE_SLIDE(state, { type: "CHANGE_SLIDE", payload: "prev" });
      assert.strictEqual(state.slider.currSlide, initialCurrSlide - 1);
    });

    it("hiddenChange should be true if currSlide > slidesCount", function() {
      let state: State = {} as State;
      state.slider = {
        currSlide: 3,
        transitionDuration: 0,
        sliderWidth: 0,
        hiddenChange: false,
        slidesCount: 3
      };
      state = CHANGE_SLIDE(state, {
        type: "CHANGE_SLIDE",
        payload: "next"
      });
      assert.isTrue(state.slider.hiddenChange);
    });

    it("hiddenChange should be true if currSlide == 0", function() {
      let state: State = {} as State;
      state.slider = {
        currSlide: 1,
        transitionDuration: 0,
        sliderWidth: 0,
        hiddenChange: false,
        slidesCount: 3
      };
      state = CHANGE_SLIDE(state, {
        type: "CHANGE_SLIDE",
        payload: "prev"
      });
      assert.isTrue(state.slider.hiddenChange);
    });
  });

  describe("CHANGE_SLIDE_HIDDEN() ", function() {
    it("should set transitionDuration 0 ", function() {
      let state: State = {} as State;
      state.slider = {
        currSlide: 1,
        transitionDuration: 1,
        sliderWidth: 0,
        hiddenChange: false,
        slidesCount: 3
      };
      state = CHANGE_SLIDE_HIDDEN(state);
      assert.strictEqual(state.slider.transitionDuration, 0);
    });
    it("should set hiddenChange false ", function() {
      let state: State = {} as State;
      state.slider = {
        currSlide: 1,
        transitionDuration: 1,
        sliderWidth: 0,
        hiddenChange: true,
        slidesCount: 3
      };
      state = CHANGE_SLIDE_HIDDEN(state);
      assert.isFalse(state.slider.hiddenChange);
    });
    it("should set currSlide 1 or slidesCount ", function() {
      let state: State = {} as State;
      let slidesCount = 3;
      state.slider = {
        currSlide: 0,
        transitionDuration: 1,
        sliderWidth: 0,
        hiddenChange: true,
        slidesCount: slidesCount
      };
      state = CHANGE_SLIDE_HIDDEN(state);
      assert.strictEqual(state.slider.currSlide, 3, "if currSlide was 0 ");
      state = CHANGE_SLIDE_HIDDEN(state);
      assert.strictEqual(state.slider.currSlide, 1);
    });
  });
});
