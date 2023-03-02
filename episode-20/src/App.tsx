import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ITodo, useTodos } from './hooks/useTodos';

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

const initialTodos: ITodo[] = [
  {
    id: 1,
    text: 'İnitial todo',
    isDone: false,
  },
];

function App() {
  const [payload, setPayload] = useState<Payload | null>(null);
  const [value, setValue] = useNumber(0);
  const { todos, addTodo, removeTodo, updateTodo } = useTodos(initialTodos);
  const todoRef = useRef<HTMLInputElement>(null);

  const onListClick = useCallback((item: string) => {
    alert(item);
  }, []);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setPayload(data));
  }, []);

  const handleRemoveTodo = (id: number) => removeTodo(id);

  const handleTodoDone = (id: number) => updateTodo(id);

  const handleAddTodo = useCallback(() => {
    if (todoRef.current) addTodo(todoRef.current.value);
  }, [addTodo]);

  return (
    <div>
      <Heading title='Introduction' />
      <Box>Hello there</Box>
      <List items={['one', 'two', 'three']} onClick={onListClick} />
      <Box>{JSON.stringify(payload)}</Box>
      <Incrementer value={value} setValue={setValue} />
      <br />
      <hr />
      <br />
      <div>
        <h4>New Todo</h4>
        <input type='text' ref={todoRef} />
        <button onClick={handleAddTodo}>ADD</button>
        <ul>
          {todos.map(({ id, text, isDone }) => (
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
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
