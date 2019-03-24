import { State } from "../store/state";

export function NEXT_VAL(state: State) {
  let finished = false;

  let nextNumber = state.teamFacts.currNumber.map((item, index) => {
    let nextVal = item + state.teamFacts.incValues[index];
    if (nextVal >= state.teamFacts.finishNumber[index]) {
      finished = true;
    }
    return nextVal;
  });

  if (finished) {
    nextNumber = state.teamFacts.finishNumber;
  }

  return {
    ...state,
    teamFacts: {
      ...state.teamFacts,
      currNumber: nextNumber,
      finished: finished
    }
  };
}
