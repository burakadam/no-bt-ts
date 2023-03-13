import { Provider } from 'react-redux';
import TodoListRedux from '../components/TodoListRedux';
import store from '../store/store';

export const TodoReduxContainer = () => {
  return (
    <Provider store={store}>
      <TodoListRedux />
    </Provider>
  );
};
