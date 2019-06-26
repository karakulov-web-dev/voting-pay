import { registerReducer } from "./ReducersList";
import { CHANGE_SLIDE, CHANGE_SLIDE_HIDDEN } from "./slider";
import { NEXT_VAL } from "./teamFactsReducer";
import { CHANGE_AUTH_STATUS } from "./Auth";
import { REGISTRATION_USER_RESULT } from "./REGISTRATION_USER_RESULT";
import { LOGIN_USER_RESULT } from "./LOGIN_USER_RESULT";
import { SetRestorePasswordSessionId } from "./SetRestorePasswordSessionId";

function RegisterReducerStart() {
  registerReducer("@@redux/INITg.g.k.p.p.h", function(state) {
    return state;
  });

  registerReducer("CHANGE_SLIDE", CHANGE_SLIDE);

  registerReducer("CHANGE_SLIDE_HIDDEN", CHANGE_SLIDE_HIDDEN);

  registerReducer("NEXT_VAL", NEXT_VAL);

  registerReducer("CHANGE_AUTH_STATUS", CHANGE_AUTH_STATUS);

  registerReducer("REGISTRATION_USER_RESULT", REGISTRATION_USER_RESULT);

  registerReducer("LOGIN_USER_RESULT", LOGIN_USER_RESULT);

  registerReducer(
    "SET_RESTORE_PASSWORD_SESSION_ID",
    SetRestorePasswordSessionId
  );
}

export { RegisterReducerStart };
