import React, { useCallback, useEffect, useState } from 'react';

const Heading = ({ title }: { title: string }) => <h2>{title}</h2>;

const Box = ({ children }: { children: React.ReactNode }) => (
  <div style={{ padding: '20px', border: '1px solid red' }}>{children}</div>
);

const Button = ({
  title,
  children,
  style,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { title?: string }) => (
  <button {...rest} style={{ ...style, backgroundColor: 'red', padding: 10 }}>
    {title ?? children}
  </button>
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

const useNumber = (initialValue: number) => useState<number>(initialValue);

type TUseNumberValue = ReturnType<typeof useNumber>[0];
type TUseNumberSet = ReturnType<typeof useNumber>[1];

const Incrementer = ({
  value,
  setValue,
}: {
  value: TUseNumberValue;
  setValue: TUseNumberSet;
}) => <Button onClick={() => setValue(value + 1)} title={`Add - ${value}`} />;

// const Incrementer = ({
//   value,
//   setValue,
// }: {
//   value: number;
//   setValue: React.Dispatch<React.SetStateAction<number>>;
// }) => <button onClick={() => setValue(value + 1)}>Add - {value}</button>;

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
    <div>
      <Heading title='Introduction' />
      <Box>Hello there</Box>
      <List items={['one', 'two', 'three']} onClick={onListClick} />
      <Box>{JSON.stringify(payload)}</Box>
      <Incrementer value={value} setValue={setValue} />
    </div>
  );
}

export default App;
