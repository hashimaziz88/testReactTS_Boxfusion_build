import { createContext } from "react";

export interface ITodo {
    id: number;
    todo: string;
    completed: boolean;
    userId: number;
}

export interface ITodoStateContext {
    isPending: boolean;
    isSuccess: boolean;
    isError: boolean;
    todo?: ITodo;
    todos?: ITodo[];
}

export interface ITodoActionContext {
    getTodo: (id: number) => void;
    getTodos: () => void;
    createTodo: (todo: ITodo) => void;
    updateTodo: (todo: ITodo) => void;
    deleteTodo: (todo: ITodo) => void;
}

export const INITIAL_STATE: ITodoStateContext = {
    isPending: false,
    isSuccess: false,
    isError: false,
};

export const TodoStateContext = createContext<ITodoStateContext>(INITIAL_STATE);

export const TodoActionContext = createContext<ITodoActionContext | undefined>(undefined);