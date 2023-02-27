import { useCallback, useEffect, useState } from 'react';

const Heading = ({ title }: { title: string }) => <h2>{title}</h2>;

const Box = ({ children }: { children: React.ReactNode }) => (
  <div style={{ padding: '20px', border: '1px solid red' }}>{children}</div>
);

const List: React.FunctionComponent<{
  items: string[];
  onClick?: (item: string) => void;
}> = ({ items, onClick }) => (
  <ul>
    {items.map((item, index) => (
      <li key={index} onClick={() => onClick?.(item)}>
        {item}
      </li>
    ))}
  </ul>
);

interface Payload {
  text: string;
}

function App() {
  const [payload, setPayload] = useState<Payload | null>(null);

  const onListClick = useCallback((item: string) => {
    alert(item);
  }, []);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setPayload(data));
  }, []);

  return (
    <div>
      <Heading title='Introduction' />
      <Box>Hello there</Box>
      <List items={['one', 'two', 'three']} onClick={onListClick} />
      <Box>{JSON.stringify(payload)}</Box>
    </div>
  );
}

export default App;
