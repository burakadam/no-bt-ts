import { useCallback, useEffect, useState } from 'react';
import Box from './components/Box';
import Incrementer, { useNumber } from './components/Incrementer';
import List from './components/List';
import TodoList from './components/TodoList';

const Heading = ({ title }: { title: string }) => <h2>{title}</h2>;

interface Payload {
  text: string;
}

function App() {
  const [payload, setPayload] = useState<Payload | null>(null);
  const [value, setValue] = useNumber(0);

  const onListClick = useCallback((item: string) => {
    alert(item);
  }, []);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setPayload(data));
  }, []);

  return (
    <div style={{ maxWidth: 500, margin: 'auto' }}>
      <Heading title='Introduction' />
      <Box>Hello there</Box>
      <List items={['one', 'two', 'three']} onClick={onListClick} />
      <Box>{JSON.stringify(payload)}</Box>
      <br />
      <Incrementer value={value} setValue={setValue} />
      <br />
      <hr />
      <br />
      <TodoList />
    </div>
  );
}

export default App;
