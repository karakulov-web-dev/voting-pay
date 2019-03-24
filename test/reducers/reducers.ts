import { assert } from "chai";
import { registerReducer, ReducersList } from "../../src/reducers/ReducersList";
import { State } from "../../src/store/state";
import { rootReducer } from "../../src/reducers/rootReducer";

describe("reducers", function() {
  describe("registerReducer(string,BaseReducer)", function() {
    it("should create function in a ReducersList", function() {
      const funcName = "test";
      function testReducer(): any {}
      registerReducer(funcName, testReducer);
      assert.exists(ReducersList[funcName], "function was not created");
    });
  });

  describe("rootReducer(State,AnyAction): State", function() {
    it("should call a reducer from the list of ReducersList", function() {
      const funcName = String(Math.random());
      let wasCalled = false;
      function testReducer(state: State, action: any): State {
        wasCalled = true;
        return state;
      }
      let state: any = {};
      registerReducer(funcName, testReducer);
      rootReducer(state, {
        type: funcName,
        payload: ""
      });
      assert.isTrue(wasCalled, "function not called");
    });
  });
});
