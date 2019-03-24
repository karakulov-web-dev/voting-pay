import { TypeChangeSlide } from "../../src/reducers/slider";
import { ThunkAction } from "redux-thunk";
import { State } from "../store/state";
import { Timeout } from "../commonTypes/common";

let switchAutoTimerId: Timeout;
let switchAutoEnableTimerId: Timeout;

export const switchToSlide = (direction: TypeChangeSlide) => {
  if (switchAutoTimerId) {
    clearInterval(switchAutoTimerId);
    switchAutoTimerId = undefined;
  }
  if (switchAutoEnableTimerId) {
    clearTimeout(switchAutoEnableTimerId);
    switchAutoEnableTimerId = undefined;
  }

  return {
    type: "CHANGE_SLIDE",
    payload: direction
  };
};

export const switchTimeoutHidden = (
  time: number
): ThunkAction<void, State, undefined, any> => {
  return function(dispatch) {
    setTimeout(() => {
      dispatch({ type: "CHANGE_SLIDE_HIDDEN" });
    }, time);
  };
};

export const switchAuto = (): ThunkAction<void, State, undefined, any> => {
  return function(dispatch) {
    if (switchAutoTimerId !== undefined) {
      return;
    }
    switchAutoTimerId = setInterval(() => {
      dispatch({ type: "CHANGE_SLIDE", payload: "next" });
    }, 3000);
  };
};

export const switchAutoEnable = (): ThunkAction<
  void,
  State,
  undefined,
  any
> => {
  return function(dispatch) {
    if (switchAutoEnableTimerId !== undefined) {
      return;
    }
    switchAutoEnableTimerId = setTimeout(() => {
      dispatch(switchAuto());
    }, 2000);
    // 2s + 3s (for slide change) ==> 5s delay
  };
};
