import { registerReducer } from "./ReducersList";
import { CHANGE_SLIDE, CHANGE_SLIDE_HIDDEN } from "./slider";
import { NEXT_VAL } from "./teamFactsReducer";

function RegisterReducerStart() {
  registerReducer("@@redux/INITg.g.k.p.p.h", function(state) {
    return state;
  });

  registerReducer("CHANGE_SLIDE", CHANGE_SLIDE);

  registerReducer("CHANGE_SLIDE_HIDDEN", CHANGE_SLIDE_HIDDEN);

  registerReducer("NEXT_VAL", NEXT_VAL);
}

export { RegisterReducerStart };
