"use strict";
exports.__esModule = true;
var ReducersList_1 = require("./ReducersList");
var slider_1 = require("./slider");
var teamFactsReducer_1 = require("./teamFactsReducer");
var Auth_1 = require("./Auth");
function RegisterReducerStart() {
    ReducersList_1.registerReducer("@@redux/INITg.g.k.p.p.h", function (state) {
        return state;
    });
    ReducersList_1.registerReducer("CHANGE_SLIDE", slider_1.CHANGE_SLIDE);
    ReducersList_1.registerReducer("CHANGE_SLIDE_HIDDEN", slider_1.CHANGE_SLIDE_HIDDEN);
    ReducersList_1.registerReducer("NEXT_VAL", teamFactsReducer_1.NEXT_VAL);
    ReducersList_1.registerReducer("CHANGE_AUTH_STATUS", Auth_1.CHANGE_AUTH_STATUS);
}
exports.RegisterReducerStart = RegisterReducerStart;
