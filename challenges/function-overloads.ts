import houses from './houses';

interface House {
  name: string;
  planets: string | string[];
}

interface HouseWithID extends House {
  id: number;
}

// function findHouses(houses: string): HouseWithID[];
// function findHouses(
//   houses: string,
//   filter: (house: House) => boolean
// ): HouseWithID[];
// function findHouses(houses: House[]): HouseWithID[];
// function findHouses(
//   houses: House[],
//   filter: (house: House) => boolean
// ): HouseWithID[];
function findHouses(
  arg1: string | House[],
  arg2?: (house: House) => boolean
): HouseWithID[] {
  const houses: House[] = typeof arg1 === 'string' ? JSON.parse(arg1) : arg1;

  return (arg2 ? houses.filter(arg2) : houses).map((house) => ({
    id: Date.now(),
    ...house,
  }));
}

console.log(
  findHouses(JSON.stringify(houses), ({ name }) => name === 'Atreides')
);

console.log(findHouses(houses, ({ name }) => name === 'Harkonnen'));

console.log(findHouses(houses, ({ name }) => name === 'Earth'));
