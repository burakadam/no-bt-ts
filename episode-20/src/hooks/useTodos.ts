import { useCallback, useReducer } from 'react';

type TActions =
  | { type: 'Add'; text: string }
  | { type: 'Remove'; id: number }
  | { type: 'Update'; id: number };

export interface ITodo {
  id: number;
  text: string;
  isDone: boolean;
}

export type TUseTodos = {
  todos: ITodo[];
  addTodo(text: string): void;
  removeTodo(id: number): void;
  updateTodo(id: number): void;
};

const useTodoManager = (initialValue: ITodo[]): TUseTodos => {
  const [todos, dispatch] = useReducer((state: ITodo[], action: TActions) => {
    switch (action.type) {
      case 'Add':
        return [
          ...state,
          {
            id: state.length + 1,
            text: action.text,
            isDone: false,
          },
        ];
      case 'Remove':
        return state.filter((item) => item.id !== action.id);
      case 'Update':
        return state.map((item) =>
          item.id === action.id ? { ...item, isDone: !item.isDone } : item
        );
      default:
        throw Error('Something went wrong');
    }
  }, initialValue);

  const addTodo = useCallback((text: string) => {
    dispatch({
      type: 'Add',
      text,
    });
  }, []);

  const removeTodo = useCallback((id: number) => {
    dispatch({
      type: 'Remove',
      id,
    });
  }, []);

  const updateTodo = useCallback((id: number) => {
    dispatch({
      type: 'Update',
      id,
    });
  }, []);

  return { todos, addTodo, removeTodo, updateTodo };
};

export { useTodoManager };
