import TodoList from '../components/TodoList';
import TodoContext from '../contexts/todoContext';
import { ITodo, useTodoManager } from '../hooks/useTodos';

const initialTodos: ITodo[] = [
  {
    id: 1,
    text: 'İnitial todo',
    isDone: false,
  },
];

const TodoContainer = () => (
  <TodoContext.Provider value={useTodoManager(initialTodos)}>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '50% 50%',
      }}
    >
      <TodoList />
      <TodoList />
    </div>
  </TodoContext.Provider>
);

export default TodoContainer;
