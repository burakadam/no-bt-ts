import { useState } from 'react';
import Button from './Button';

export const useNumber = (initialValue: number) =>
  useState<number>(initialValue);

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

export default Incrementer;
