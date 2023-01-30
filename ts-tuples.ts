type ThreeDCOordinate = [x: number, y: number, z: number];

const add3DCoordinate = (
  c1: ThreeDCOordinate,
  c2: ThreeDCOordinate
): ThreeDCOordinate => [c1[0] + c2[0], c1[1] + c2[1], c1[2] + c2[2]];

console.log(add3DCoordinate([1, 2, 3], [4, 5, 6]));

type State = [() => string, (v: string) => void];

//React useSate like
const simpleStringState = (initial: string): State => {
  let str: string = initial;
  return [
    () => str,
    (v: string) => {
      str = v;
    },
  ];
};

const [strGetter, strSetter] = simpleStringState('hello');
console.log(strGetter());
strSetter('goodby');
console.log(strGetter());
