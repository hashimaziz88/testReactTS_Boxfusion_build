import { getAxiosInstance } from "../../utils/axiosInstance";
import { INITIAL_STATE, ITodo, TodoActionContext, TodoStateContext } from "./context";
import { TodoReducer } from "./reducer";
import { useContext, useReducer } from "react";
import { getTodoPending, getTodoSuccess, getTodoError, getTodosPending, getTodosError, getTodosSuccess, createTodoPending, createTodoError, createTodoSuccess, updateTodoPending, updateTodoSuccess, updateTodoError, deleteTodoPending, deleteTodoError, deleteTodoSuccess } from "./actions";
import { readTodos, writeTodos, ensureSeeded, getNextId, TodoItem } from "../../utils/todoStore";

export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(TodoReducer, INITIAL_STATE)
    const instance = getAxiosInstance();

    const getTodo = async (id: number) => {
        dispatch(getTodoPending());
        try {
            const local = readTodos();
            const found = local.find(t => t.id === id);
            if (found) {
                dispatch(getTodoSuccess(found as ITodo));
                return;
            }
            const endpoint = `todos/${id}`;
            const response = await instance.get(endpoint);
            dispatch(getTodoSuccess(response.data));
        } catch (error) {
            console.error(error);
            dispatch(getTodoError());
        }
    };

    const getTodos = async () => {
        dispatch(getTodosPending());
        try {
            const seeded = await ensureSeeded(instance);
            if (seeded && seeded.length > 0) {
                dispatch(getTodosSuccess(seeded as ITodo[]));
                return;
            }

            const local = readTodos();
            dispatch(getTodosSuccess(local as ITodo[]));
        } catch (error) {
            console.error(error);
            dispatch(getTodosError());
        }
    };

    const createTodo = async (todo: ITodo) => {
        dispatch(createTodoPending());
        try {
            const local = readTodos();
            const nextId = getNextId(local);
            const newTodo: TodoItem = { ...todo as any, id: nextId };
            const updated = [newTodo, ...local];
            writeTodos(updated);
            dispatch(createTodoSuccess(newTodo as ITodo));
            dispatch(getTodosSuccess(updated as ITodo[]));
        } catch (error) {
            console.error(error);
            dispatch(createTodoError());
        }
    };

    const updateTodo = async (todo: ITodo) => {
        dispatch(updateTodoPending());
        try {
            const local = readTodos();
            const idx = local.findIndex(t => t.id === todo.id);
            if (idx === -1) {
                dispatch(updateTodoError());
                return;
            }
            local[idx] = { ...local[idx], ...todo };
            writeTodos(local);
            dispatch(updateTodoSuccess(local[idx] as ITodo));
            dispatch(getTodosSuccess(local as ITodo[]));
        } catch (error) {
            console.error(error);
            dispatch(updateTodoError());
        }
    };

    const deleteTodo = async (todo: ITodo) => {
        dispatch(deleteTodoPending());
        try {
            const local = readTodos();
            const updated = local.filter(t => t.id !== todo.id);
            writeTodos(updated);
            dispatch(deleteTodoSuccess(todo));
            dispatch(getTodosSuccess(updated as ITodo[]));
        } catch (error) {
            console.error(error);
            dispatch(deleteTodoError());
        }
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