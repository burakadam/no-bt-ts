import { useCallback, useRef } from 'react';
import {
  useAddTodo,
  useRemoveTodo,
  useTodos,
  useUpdateTodo,
} from '../contexts/todoContext';

import UL from './Ul';

const TodoList = () => {
  const todos = useTodos();
  const removeTodo = useRemoveTodo();
  const addTodo = useAddTodo();
  const updateTodo = useUpdateTodo();
  // const { todos, addTodo, removeTodo, updateTodo } = useTodos(initialTodos);
  const todoRef = useRef<HTMLInputElement>(null);

  const handleRemoveTodo = (id: number) => removeTodo(id);

  const handleTodoDone = (id: number) => updateTodo(id);

  const handleAddTodo = useCallback(() => {
    if (todoRef.current) {
      addTodo(todoRef.current.value);
      todoRef.current.value = '';
    }
  }, [addTodo]);

  return (
    <div>
      <h4>New Todo</h4>
      <input type='text' ref={todoRef} />
      <button onClick={handleAddTodo}>ADD</button>
      <UL
        items={todos}
        render={({ id, text, isDone }) => (
          <div key={id}>
            {id}-{text} <br />
            <button onClick={() => handleRemoveTodo(id)}>REMOVE</button>
            <br />
            <input
              type='radio'
              name={text}
              checked={isDone}
              onChange={() => handleTodoDone(id)}
            />
            <label htmlFor={text}>DONE</label>
          </div>
        )}
      />
    </div>
  );
};

export default TodoList;
