import { getAxiosInstance } from "../../utils/axiosInstance";
import { INITIAL_STATE, ITodo, TodoActionContext, TodoStateContext } from "./context";
import { TodoReducer } from "./reducer";
import { useContext, useReducer } from "react";
import { getTodoPending, getTodoSuccess, getTodoError, getTodosPending, getTodosError, getTodosSuccess, createTodoPending, createTodoError, createTodoSuccess, updateTodoPending, updateTodoSuccess, updateTodoError, deleteTodoPending, deleteTodoError, deleteTodoSuccess } from "./actions";

export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(TodoReducer, INITIAL_STATE)
    const instance = getAxiosInstance();

    const getTodo = async (id: number) => {
        dispatch(getTodoPending());
        const endpoint = `todos/${id}`;
        await instance.get(endpoint)
            .then((response) => {
                dispatch(getTodoSuccess(response.data));
            })
            .catch((error) => {
                console.error(error);
                dispatch(getTodoError());
            });
    };

    const getTodos = async () => {
        dispatch(getTodosPending());
        const endpoint = "todos";
        await instance.get(endpoint)
            .then((response) => {
                dispatch(getTodosSuccess(response.data.todos));
            })
            .catch((error) => {
                console.error(error);
                dispatch(getTodosError());
            });
    };

    const createTodo = async (todo: ITodo) => {
        dispatch(createTodoPending());
        const endpoint = "todos/add";
        await instance.post(endpoint, todo)
            .then((response) => {
                dispatch(createTodoSuccess(response.data));
            }
            )
            .catch((error) => {
                console.error(error);
                dispatch(createTodoError());
            });
    };

    const updateTodo = async (todo: ITodo) => {
        dispatch(updateTodoPending());
        const endpoint = `todos/${todo.id}`;
        await instance.put(endpoint, todo)
            .then((response) => {
                dispatch(updateTodoSuccess(response.data));
            })
            .catch((error) => {
                console.error(error);
                dispatch(updateTodoError());
            });
    };

    const deleteTodo = async (todo: ITodo) => {
        dispatch(deleteTodoPending());
        const endpoint = `todos/${todo.id}`;
        await instance.delete(endpoint)
            .then(() => {
                dispatch(deleteTodoSuccess(todo));
            })
            .catch((error) => {
                console.error(error);
                dispatch(deleteTodoError());
            });
    }

    return (
        <TodoStateContext.Provider value={state}>
            <TodoActionContext.Provider value={{ getTodo, getTodos, createTodo, updateTodo, deleteTodo }}>
                {children}
            </TodoActionContext.Provider>
        </TodoStateContext.Provider>
    );
};

export const useTodoState = () => {
    const context = useContext(TodoStateContext);
    if (!context) {
        throw new Error("useTodoState must be used within a TodoProvider");
    }
    return context;
};

export const useTodoActions = () => {
    const context = useContext(TodoActionContext);
    if (!context) {
        throw new Error("useTodoActions must be used within a TodoProvider");
    }
    return context;
};