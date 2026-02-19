import { createContext } from "react";

export interface IAuthUser {
    username: string;
    role: string;
    password: string;
}

export interface IAuthStateContext {
    isSuccess: boolean;
    isPending?: boolean;
    isError?: boolean;
}

export interface IAuthActionContext {
    login: (username: string, password: string) => Promise<{ success: boolean; role?: string }>;
    logout: () => void;
}

export const INITIAL_STATE: IAuthStateContext = {
    isSuccess: false,
    isPending: false,
    isError: false,
};

export const AuthStateContext = createContext<IAuthStateContext>(INITIAL_STATE);

export const AuthActionContext = createContext<IAuthActionContext>(undefined!);
