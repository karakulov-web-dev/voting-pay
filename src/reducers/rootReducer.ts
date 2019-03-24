import { ReducersList } from "./ReducersList";
import { State, state as defaultState } from "../store/state";

export interface AnyAction {
  readonly payload: any;
  readonly type: string;
}

export interface IReducersList {
  [key: string]: BaseReducer;
}

export interface BaseReducer {
  (state: State, action: AnyAction): State;
}
/**
 * will call the reducer from the list of ReducersList with the key equal to [[AnyAction.type]].
 * transfers parameters to the called reducer without changes
 * @param state
 * @param action
 */
const rootReducer = function rootReducer(
  state: State | undefined,
  action: AnyAction
): State {
  if (typeof state === "undefined") {
    state = defaultState;
  }
  try {
    if (typeof ReducersList[action.type] === "undefined") {
      throw new Error(`action ${action.type} not found`);
    }
  } catch (e) {
    console.log(e);
    return state;
  }
  state = ReducersList[action.type](state, action);
  return state;
};
export { rootReducer };
