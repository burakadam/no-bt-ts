const dogNames: string[] = ['Gofret', 'Sütkaç', 'Rocky'];

const customForEach = <T>(list: T[], callback: (v: T) => void) => {
  list.reduce((acc, val) => {
    callback(val);
    return undefined;
  }, undefined);
};

console.log(customForEach(dogNames, (v) => console.log(v)));

const customFilter = <T>(list: T[], callback: (v: T) => boolean): T[] =>
  list.reduce((acc, val) => (callback(val) ? [...acc, val] : acc), [] as T[]);

console.log(customFilter([1, 2, 3, 4, 5, 6], (e) => e < 3));

const map = <T, K>(list: T[], callback: (v: T) => K): K[] =>
  list.reduce((acc, val) => [...acc, callback(val)], [] as K[]);

console.log(map([1, 2], (e) => (e + 2).toString()));
