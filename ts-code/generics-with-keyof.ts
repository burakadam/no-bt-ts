const dogList = [
  { name: 'Gofret', age: 11 },
  { name: 'Sütlaç', age: 6 },
];

const pluck = <T, K extends keyof T>(list: T[], key: K): T[K][] =>
  list.map((item) => item[key]);

console.log(pluck(dogList, 'name'));
console.log(pluck(dogList, 'age'));

interface BaseEvent {
  time: number;
  user: string;
}

interface EventMap {
  addToCart: BaseEvent & { quantiy: number; productID: string };
  checkout: BaseEvent;
}

const sendEvent = <Name extends keyof EventMap>(
  name: Name,
  data: EventMap[Name]
) => console.log([name, data]);

sendEvent('addToCart', {
  productID: '12a',
  quantiy: 1,
  time: 10,
  user: 'Burak',
});
