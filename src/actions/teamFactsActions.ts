import { Timeout, ThunkAnyAction } from "../commonTypes/common";

export let localState = {
  countTimerId: undefined as Timeout
};

export const startCount = (time: number): ThunkAnyAction => {
  return function(dispatch) {
    if (localState.countTimerId !== undefined) {
      return;
    }
    localState.countTimerId = setInterval(() => {
      dispatch({ type: "NEXT_VAL" });
    }, time);
  };
};

export const stopCount = (): ThunkAnyAction => {
  return function(dispatch) {
    if (localState.countTimerId) {
      clearInterval(localState.countTimerId);
      localState.countTimerId = undefined;
    }
  };
};
