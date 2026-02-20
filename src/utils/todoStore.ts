export interface TodoItem {
    id: number;
    todo: string;
    completed: boolean;
    userId: number;
}

const STORAGE_KEY = "dummy_todos_v1";

export const readTodos = (): TodoItem[] => {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) as TodoItem[] : [];
    } catch (e) {
        console.error('todoStore.readTodos failed', e);
        return [];
    }
};

export const writeTodos = (todos: TodoItem[]) => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    } catch (e) {
        console.error('todoStore.writeTodos failed', e);
    }
};

// If storage is empty, fetch from API endpoint `todos` and seed storage.
export const ensureSeeded = async (instance?: any): Promise<TodoItem[]> => {
    const local = readTodos();
    if (local && local.length > 0) return local;
    if (!instance) return [];
    try {
        const res = await instance.get('todos');
        const todos = res?.data?.todos || [];
        writeTodos(todos);
        return todos;
    } catch (e) {
        console.error('todoStore.ensureSeeded fetch failed', e);
        return [];
    }
};

export const getNextId = (todos: TodoItem[]) => {
    return todos.length ? Math.max(...todos.map(t => t.id)) + 1 : 1;
};
