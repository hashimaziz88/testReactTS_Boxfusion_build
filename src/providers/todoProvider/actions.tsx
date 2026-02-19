import { createAction } from "redux-actions";
import { ITodo, ITodoStateContext } from "./context";

export enum TodoActionEnums {

    getTodoPending = "GET_TODO_PENDING",
    getTodoSuccess = "GET_TODO_SUCCESS",
    getTodoError = "GET_TODO_ERROR",

    getTodosPending = "GET_TODOS_PENDING",
    getTodosSuccess = "GET_TODOS_SUCCESS",
    getTodosError = "GET_TODOS_ERROR",

    createTodoPending = "CREATE_TODO_PENDING",
    createTodoSuccess = "CREATE_TODO_SUCCESS",
    createTodoError = "CREATE_TODO_ERROR",

    updateTodoPending = "UPDATE_TODO_PENDING",
    updateTodoSuccess = "UPDATE_TODO_SUCCESS",
    updateTodoError = "UPDATE_TODO_ERROR",

    deleteTodoPending = "DELETE_TODO_PENDING",
    deleteTodoSuccess = "DELETE_TODO_SUCCESS",
    deleteTodoError = "DELETE_TODO_ERROR",
}

export const getTodoPending = createAction<ITodoStateContext>(
    TodoActionEnums.getTodoPending,
    () => ({ isPending: true, isSuccess: false, isError: false })
);

export const getTodoSuccess = createAction<ITodoStateContext, ITodo>(
    TodoActionEnums.getTodoSuccess,
    (todo: ITodo) => ({ isPending: false, isSuccess: true, isError: false, todo })
);

export const getTodoError = createAction<ITodoStateContext>(
    TodoActionEnums.getTodoError,
    () => ({ isPending: false, isSuccess: false, isError: true })
);

export const getTodosPending = createAction<ITodoStateContext>(
    TodoActionEnums.getTodosPending,
    () => ({ isPending: true, isSuccess: false, isError: false })
);

export const getTodosSuccess = createAction<ITodoStateContext, ITodo[]>(
    TodoActionEnums.getTodosSuccess,
    (todos: ITodo[]) => ({ isPending: false, isSuccess: true, isError: false, todos })
);

export const getTodosError = createAction<ITodoStateContext>(
    TodoActionEnums.getTodosError,
    () => ({ isPending: false, isSuccess: false, isError: true })
);

export const createTodoPending = createAction<ITodoStateContext>(
    TodoActionEnums.createTodoPending,
    () => ({ isPending: true, isSuccess: false, isError: false })
);

export const createTodoSuccess = createAction<ITodoStateContext, ITodo>(
    TodoActionEnums.createTodoSuccess,
    (todo: ITodo) => ({ isPending: false, isSuccess: true, isError: false, todo })
);

export const createTodoError = createAction<ITodoStateContext>(
    TodoActionEnums.createTodoError,
    () => ({ isPending: false, isSuccess: false, isError: true })
);

export const updateTodoPending = createAction<ITodoStateContext>(
    TodoActionEnums.updateTodoPending,
    () => ({ isPending: true, isSuccess: false, isError: false })
);

export const updateTodoSuccess = createAction<ITodoStateContext, ITodo>(
    TodoActionEnums.updateTodoSuccess,
    (todo: ITodo) => ({ isPending: false, isSuccess: true, isError: false, todo })
);

export const updateTodoError = createAction<ITodoStateContext>(
    TodoActionEnums.updateTodoError,
    () => ({ isPending: false, isSuccess: false, isError: true })
);

export const deleteTodoPending = createAction<ITodoStateContext>(
    TodoActionEnums.deleteTodoPending,
    () => ({ isPending: true, isSuccess: false, isError: false })
);

export const deleteTodoSuccess = createAction<ITodoStateContext, ITodo>(
    TodoActionEnums.deleteTodoSuccess,
    (todo: ITodo) => ({ isPending: false, isSuccess: true, isError: false, todo })
);

export const deleteTodoError = createAction<ITodoStateContext>(
    TodoActionEnums.deleteTodoError,
    () => ({ isPending: false, isSuccess: false, isError: true })
);