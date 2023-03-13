import { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addTodo, removeTodo, selectTodos, updateTodo } from '../store/store';

import UL from './Ul';

const TodoListRedux = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  const todoRef = useRef<HTMLInputElement>(null);

  const handleRemoveTodo = (id: number) => dispatch(removeTodo(id));

  const handleTodoDone = (id: number) => dispatch(updateTodo(id));

  const handleAddTodo = useCallback(() => {
    if (todoRef.current) {
      dispatch(addTodo(todoRef.current.value));
      todoRef.current.value = '';
    }
  }, [dispatch]);

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

export default TodoListRedux;
