import { State } from "../store/state";
import { ActionChangeAuthStatus } from "../actions/Auth";

export function CHANGE_AUTH_STATUS(
  state: State,
  action: ActionChangeAuthStatus
) {
  let { User } = state;
  return { ...state, User: { authStatus: action.payload } };
}
