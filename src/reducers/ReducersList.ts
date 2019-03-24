import { RegisterReducerStart } from "./RegisterReducerStart";
import { IReducersList, BaseReducer, AnyAction } from "./rootReducer";

let ReducersList: IReducersList = {};
/**
 * registers a reducer, the reducer will be called whenever an [[AnyAction.type]] equals the reducer key
 * @param key reducer key,
 * @param func reducer function
 */
function registerReducer(key: string, func: BaseReducer) {
  if (typeof ReducersList[key] !== "undefined") {
    throw new Error(`ReducerFunction ${key} already exists`);
  }
  ReducersList[key] = func;
}
RegisterReducerStart();

export { ReducersList, registerReducer, BaseReducer };
