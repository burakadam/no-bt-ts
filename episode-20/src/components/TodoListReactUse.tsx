import { useCallback, useRef } from 'react';
import { useReactUseTodos } from '../hooks/useReactUseTodos';

import UL from './Ul';

const initialTodos = [{ id: 0, text: 'Hey ini', isDone: false }];

const TodoListReactUse = () => {
  const { todos, addTodo, removeTodo, updateTodo } =
    useReactUseTodos(initialTodos);
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

export default TodoListReactUse;
