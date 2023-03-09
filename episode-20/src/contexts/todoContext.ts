import { createContext, useContext } from 'react';
import { ITodo, useTodoManager } from '../hooks/useTodos';

type TTodoContext = ReturnType<typeof useTodoManager>;

const TodoContext = createContext<TTodoContext>({
  todos: [],
  addTodo: () => {},
  removeTodo: () => {},
  updateTodo: () => {},
});

export const useTodos = (): ITodo[] => {
  const { todos } = useContext(TodoContext);
  return todos;
};

export const useAddTodo = (): TTodoContext['addTodo'] => {
  const { addTodo } = useContext(TodoContext);
  return addTodo;
};

export const useRemoveTodo = (): TTodoContext['removeTodo'] => {
  const { removeTodo } = useContext(TodoContext);
  return removeTodo;
};

export const useUpdateTodo = (): TTodoContext['updateTodo'] => {
  const { updateTodo } = useContext(TodoContext);
  return updateTodo;
};

export default TodoContext;
