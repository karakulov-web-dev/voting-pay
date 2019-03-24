import { State } from "../store/state";
import { AnyAction } from "./rootReducer";
import { number } from "prop-types";

export interface ChangeSlideAction extends AnyAction {
  readonly payload: TypeChangeSlide;
  readonly type: string;
}
export type TypeChangeSlide = "next" | "prev";

function CHANGE_SLIDE(state: State, action: ChangeSlideAction): State {
  let width;
  try {
    width = document.documentElement.clientWidth;
  } catch {
    width = 100;
  }

  let hiddenChange = false;
  let { slider } = state;

  let nextSlide = slider.currSlide + 1;
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
  return { ...state, slider };
}

function CHANGE_SLIDE_HIDDEN(state: State) {
  let { slider } = state;
  let nextSlide = 1;
  if (slider.currSlide == 0) {
    nextSlide = slider.slidesCount;
  }
  slider.currSlide = nextSlide;
  slider.hiddenChange = false;
  slider.transitionDuration = 0;
  return { ...state, slider: { ...slider } };
}

export { CHANGE_SLIDE, CHANGE_SLIDE_HIDDEN };
