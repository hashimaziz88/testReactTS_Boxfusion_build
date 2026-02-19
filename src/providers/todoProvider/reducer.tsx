import { handleActions } from "redux-actions";
import { INITIAL_STATE, ITodoStateContext } from "./context";
import { TodoActionEnums } from "./actions";

export const TodoReducer = handleActions<ITodoStateContext, ITodoStateContext>(
    {
        [TodoActionEnums.getTodoPending]: (state, action) => ({ ...state, ...action.payload }),
        [TodoActionEnums.getTodoSuccess]: (state, action) => ({ ...state, ...action.payload }),
        [TodoActionEnums.getTodoError]: (state, action) => ({ ...state, ...action.payload }),
        [TodoActionEnums.getTodosPending]: (state, action) => ({ ...state, ...action.payload }),
        [TodoActionEnums.getTodosSuccess]: (state, action) => ({ ...state, ...action.payload }),
        [TodoActionEnums.getTodosError]: (state, action) => ({ ...state, ...action.payload }),
        [TodoActionEnums.createTodoPending]: (state, action) => ({ ...state, ...action.payload }),
        [TodoActionEnums.createTodoSuccess]: (state, action) => ({ ...state, ...action.payload }),
        [TodoActionEnums.createTodoError]: (state, action) => ({ ...state, ...action.payload }),
        [TodoActionEnums.updateTodoPending]: (state, action) => ({ ...state, ...action.payload }),
        [TodoActionEnums.updateTodoSuccess]: (state, action) => ({ ...state, ...action.payload }),
        [TodoActionEnums.updateTodoError]: (state, action) => ({ ...state, ...action.payload }),
        [TodoActionEnums.deleteTodoPending]: (state, action) => ({ ...state, ...action.payload }),
        [TodoActionEnums.deleteTodoSuccess]: (state, action) => ({ ...state, ...action.payload }),
        [TodoActionEnums.deleteTodoError]: (state, action) => ({ ...state, ...action.payload }),
    }, INITIAL_STATE
);