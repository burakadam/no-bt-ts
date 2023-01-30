//React useSate like
const simpleState = <T>(initial: T): [() => T, (v: T) => void] => {
  let val: T = initial;
  return [
    () => val,
    (v: T) => {
      val = v;
    },
  ];
};

const [str1getter, str1setter] = simpleState(1);
console.log(str1getter());
str1setter(11);
console.log(str1getter());

const [str2getter, str2setter] = simpleState<string | null>(null);
console.log(str2getter());
str2setter('string');
console.log(str2getter());

interface Rank<T> {
  item: T;
  rank: number;
}

const ranker = <T>(items: T[], rank: (v: T) => number): T[] => {
  const ranks: Rank<T>[] = items.map((item) => ({
    item,
    rank: rank(item),
  }));

  ranks.sort((a, b) => a.rank - b.rank);

  return ranks.map((rank) => rank.item);
};

interface Dog {
  name: string;
  goodness: number;
}

const dogs: Dog[] = [
  {
    name: 'Gofret',
    goodness: 100,
  },
  {
    name: 'Sütlaç',
    goodness: 1,
  },
];

const ranks = ranker(dogs, ({ goodness }) => goodness);

console.log(ranks);
