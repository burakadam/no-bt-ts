interface Cat {
  name: string;
  breed: string;
}

type ReadonlyCat = Readonly<Cat>;

const makeCat = (name: string, breed: string): ReadonlyCat => ({ name, breed });

const usul = makeCat('Usul', 'Tabby');

// can not change readonly types
// usul.name = 'Piter';

console.log(usul);

const makeCoor = (
  x: number,
  y: number,
  z: number
): readonly [number, number, number] => [x, y, z];

const c1 = makeCoor(1, 2, 3);

// can not change readonly types
// c1[0] = 5;

const reallyConst = [1, 2, 3] as const;

// can not change readonly types
// reallyConst[0] = 5
