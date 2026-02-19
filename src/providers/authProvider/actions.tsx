import { createAction } from "redux-actions";
import { IAuthStateContext } from "./context";
import { AuthActionEnums } from "./reducer";

export const loginPending = createAction<IAuthStateContext>(
    AuthActionEnums.loginPending,
    () => ({ isSuccess: false, isPending: true, isError: false }),
);

export const loginSuccess = createAction<IAuthStateContext, { token: string; role: string }>(
    AuthActionEnums.loginSuccess,
    (payload: { token: string; role: string }) => ({ ...payload, isSuccess: true, isPending: false, isError: false }),
);

export const loginError = createAction<IAuthStateContext>(
    AuthActionEnums.loginError,
    () => ({ isSuccess: false, isPending: false, isError: true }),
);

export const logoutPending = createAction<IAuthStateContext>(
    AuthActionEnums.logoutPending,
    () => ({ isSuccess: true, isPending: true, isError: false }),
);

export const logoutError = createAction<IAuthStateContext>(
    AuthActionEnums.logoutError,
    () => ({ isSuccess: true, isPending: false, isError: true }),
);

export const logoutSuccess = createAction<IAuthStateContext>(
    AuthActionEnums.logoutSuccess,
    () => ({ isSuccess: false, isPending: false, isError: false }),
);
