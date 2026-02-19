import { handleActions } from "redux-actions";
import { INITIAL_STATE, IAuthStateContext } from "./context";

export enum AuthActionEnums {
    loginPending = "LOGIN_PENDING",
    loginSuccess = "LOGIN_SUCCESS",
    loginError = "LOGIN_ERROR",

    logoutPending = "LOGOUT_PENDING",
    logoutError = "LOGOUT_ERROR",
    logoutSuccess = "LOGOUT_SUCCESS",
}

export const AuthReducer = handleActions<IAuthStateContext, IAuthStateContext>(
    {
        [AuthActionEnums.loginPending]: (state, action) => ({ ...state, ...action.payload }),
        [AuthActionEnums.loginSuccess]: (state, action) => ({ ...state, ...action.payload }),
        [AuthActionEnums.loginError]: (state, action) => ({ ...state, ...action.payload }),
        [AuthActionEnums.logoutPending]: (state, action) => ({ ...state, ...action.payload }),
        [AuthActionEnums.logoutError]: (state, action) => ({ ...state, ...action.payload }),
        [AuthActionEnums.logoutSuccess]: (state, action) => ({ ...state, ...action.payload }),
    },
    INITIAL_STATE,
);
