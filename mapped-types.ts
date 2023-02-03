// type TDogInfo = {
//   name: string;
// } & Record<string, string>;

type TDogInfo = {
  name: string;
  age: number;
};

const dog: TDogInfo = {
  name: 'GOFİ',
  age: 10,
};

type TListeners<T> = {
  [Property in keyof T as `on${Capitalize<string & Property>}Change`]?: (
    newValue: T[Property]
  ) => void;
};

const listenToObject = <T>(obj: T, listeners: TListeners<T>): void => {
  throw 'Needs to be implemented';
};

type TInfoListeners = TListeners<TDogInfo>;

listenToObject(dog, {
  onNameChange: (v: string) => {},
  onAgeChange: (v: number) => {},
});
