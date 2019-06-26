"use strict";
exports.__esModule = true;
var ReducersList_1 = require("./ReducersList");
var slider_1 = require("./slider");
var teamFactsReducer_1 = require("./teamFactsReducer");
var Auth_1 = require("./Auth");
var REGISTRATION_USER_RESULT_1 = require("./REGISTRATION_USER_RESULT");
var LOGIN_USER_RESULT_1 = require("./LOGIN_USER_RESULT");
var SetRestorePasswordSessionId_1 = require("./SetRestorePasswordSessionId");
function RegisterReducerStart() {
    ReducersList_1.registerReducer("@@redux/INITg.g.k.p.p.h", function (state) {
        return state;
    });
    ReducersList_1.registerReducer("CHANGE_SLIDE", slider_1.CHANGE_SLIDE);
    ReducersList_1.registerReducer("CHANGE_SLIDE_HIDDEN", slider_1.CHANGE_SLIDE_HIDDEN);
    ReducersList_1.registerReducer("NEXT_VAL", teamFactsReducer_1.NEXT_VAL);
    ReducersList_1.registerReducer("CHANGE_AUTH_STATUS", Auth_1.CHANGE_AUTH_STATUS);
    ReducersList_1.registerReducer("REGISTRATION_USER_RESULT", REGISTRATION_USER_RESULT_1.REGISTRATION_USER_RESULT);
    ReducersList_1.registerReducer("LOGIN_USER_RESULT", LOGIN_USER_RESULT_1.LOGIN_USER_RESULT);
    ReducersList_1.registerReducer("SET_RESTORE_PASSWORD_SESSION_ID", SetRestorePasswordSessionId_1.SetRestorePasswordSessionId);
}
exports.RegisterReducerStart = RegisterReducerStart;
