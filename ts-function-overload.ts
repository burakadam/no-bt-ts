interface ICoordinate {
  x: number;
  y: number;
}

function parseCoordinate(obj: ICoordinate): ICoordinate;
function parseCoordinate(str: string): ICoordinate;
function parseCoordinate(x: number, y: number): ICoordinate;
function parseCoordinate(arg1: unknown, arg2?: unknown): ICoordinate {
  let coord: ICoordinate = {
    x: 0,
    y: 0,
  };

  if (typeof arg1 === 'string') {
    arg1.split(',').forEach((str) => {
      const [key, value] = str.split(':');
      coord[key as 'x' | 'y'] = parseInt(value, 10);
    });
  } else if (typeof arg1 === 'object') coord = { ...(arg1 as ICoordinate) };
  else coord = { x: arg1 as number, y: arg2 as number };

  return coord;
}

console.log(parseCoordinate({ x: 12, y: 13 }));
console.log(parseCoordinate(13, 14));
console.log(parseCoordinate('{ x: 122, y: 132 }'));
