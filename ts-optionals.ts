const printIngredient = (
  quantity: string,
  ingredient: string,
  extra?: string
) => console.log(`${quantity} ${ingredient} ${extra ? extra : ''}`);

printIngredient('1c', 'flour');
printIngredient('1c', 'flour', 'sometin more');

interface User {
  id: string;
  info?: {
    email: string;
  };
}

const getEmail = (user: User): string => {
  if (user.info) return user.info.email!;
  return '';
};

const getEmailBetter = (user: User): string => user?.info?.email ?? '';

const getCallback = (x: number, y: number, callback?: () => void) => {
  console.log([x, y]);
  callback?.();
};
