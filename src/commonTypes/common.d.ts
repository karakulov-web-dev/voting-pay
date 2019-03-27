import { State } from "../store/state";
import { ThunkAction } from "redux-thunk";

export type Timeout = NodeJS.Timeout | undefined;
export type ThunkAnyAction = ThunkAction<void, State, void, any>;
