import { useCallback, useEffect } from 'react';
import { createGlobalState } from 'react-use';

export interface ITodo {
  id: number;
  text: string;
  isDone: boolean;
}

const useGlobalTodos = createGlobalState<ITodo[]>([]);

export type TUseTodos = {
  todos: ITodo[];
  addTodo(text: string): void;
  removeTodo(id: number): void;
  updateTodo(id: number): void;
};

const useReactUseTodos = (initialValue: ITodo[]): TUseTodos => {
  const [todos, setTodos] = useGlobalTodos();

  useEffect(() => {
    setTodos(initialValue);
  }, [initialValue, setTodos]);

  const addTodo = useCallback(
    (text: string) => {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: text,
          isDone: false,
        },
      ]);
    },
    [todos, setTodos]
  );

  const removeTodo = useCallback(
    (removeId: number) => {
      setTodos(todos.filter(({ id }) => id !== removeId));
    },
    [todos, setTodos]
  );

  const updateTodo = useCallback(
    (updateId: number) => {
      setTodos(
        todos.map((item) =>
          item.id === updateId ? { ...item, isDone: !item.isDone } : item
        )
      );
    },
    [todos, setTodos]
  );

  return { todos, addTodo, removeTodo, updateTodo };
};

export { useReactUseTodos };
