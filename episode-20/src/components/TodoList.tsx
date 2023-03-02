import { useCallback, useRef } from 'react';
import { ITodo, useTodos } from '../hooks/useTodos';
import UL from './Ul';

const initialTodos: ITodo[] = [
  {
    id: 1,
    text: 'İnitial todo',
    isDone: false,
  },
];

const TodoList = () => {
  const { todos, addTodo, removeTodo, updateTodo } = useTodos(initialTodos);
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
          <li key={id}>
            {id}-{text} <br />
            <button onClick={() => handleRemoveTodo(id)}>REMOVE</button>
            <br />
            <input
              type='radio'
              name={text}
              checked={isDone}
              onClick={() => handleTodoDone(id)}
            />
            <label htmlFor={text}>DONE</label>
          </li>
        )}
      />
    </div>
  );
};

export default TodoList;
