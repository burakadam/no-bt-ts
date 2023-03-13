import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ITodo {
  id: number;
  text: string;
  isDone: boolean;
}

interface ITodoSliceState {
  todos: ITodo[];
}

const initialState: ITodoSliceState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos = [
        ...state.todos,
        {
          id: Date.now(),
          text: action.payload,
          isDone: false,
        },
      ];
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    updateTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.map((item) =>
        item.id === action.payload ? { ...item, isDone: !item.isDone } : item
      );
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const selectTodos = (state: RootState) => state.todos.todos;

export default store;
