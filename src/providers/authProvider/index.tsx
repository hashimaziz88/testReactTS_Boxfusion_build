import React, { useReducer, useContext } from "react";
import { INITIAL_STATE, AuthActionContext, AuthStateContext } from "./context";
import { AuthReducer } from "./reducer";
import { loginPending, loginSuccess, loginError, logoutError, logoutPending, logoutSuccess } from "./actions";
import { dummyLoginInstance } from "../../utils/dummyLoginInstance";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    const login = async (username: string, password: string) => {
        dispatch(loginPending());
        const response = await dummyLoginInstance.login(username, password);
        if (response.success) {
            localStorage.setItem("auth_token", "dummy_token");
            localStorage.setItem("user_role", response.role || "");
            dispatch(loginSuccess({ token: "dummy_token", role: response.role || "" }));
        } else {
            dispatch(loginError());
        }
        return response;
    };

    const logout = async () => {
        try {
            dispatch(logoutPending());
            // perform any async logout work if needed (dummy instance clears storage)
            await Promise.resolve();
            if (dummyLoginInstance && typeof dummyLoginInstance.logout === "function") {
                dummyLoginInstance.logout();
            } else {
                localStorage.removeItem("auth_token");
                localStorage.removeItem("user_role");
            }
            dispatch(logoutSuccess());
            return { success: true };
        } catch (err) {
            console.error("Logout error:", err);
            dispatch(logoutError());
            return { success: false };
        }
    };

    return (
        <AuthStateContext.Provider value={state}>
            <AuthActionContext.Provider value={{ login, logout }}>{children}</AuthActionContext.Provider>
        </AuthStateContext.Provider>
    );
};

export const useAuthState = () => {
    const context = useContext(AuthStateContext);
    if (!context) throw new Error("useAuthState must be used within an AuthProvider");
    return context;
};

export const useAuthActions = () => {
    const context = useContext(AuthActionContext);
    if (!context) throw new Error("useAuthActions must be used within an AuthProvider");
    return context;
};
