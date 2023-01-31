interface MyUser {
  name: string;
  id: string;
  email?: string;
  phone?: string;
}

// interface MyOptionalUser {
//   name?: string;
//   id?: string;
//   email?: string;
// }

type MyOptionalUser = Partial<MyUser>;

const merge = (user: MyUser, overrides: MyOptionalUser) => ({
  ...user,
  ...overrides,
});

console.log(
  merge(
    {
      name: 'Burak',
      id: 'a',
      email: 'burak@rak.com',
    },
    {
      email: 'burak@gmail.com',
    }
  )
);

type JustEmailAndName = Pick<MyUser, 'email' | 'name'>;

type RequiredEmailAndName = Required<JustEmailAndName>;

type UserWithoutId = Omit<MyUser, 'id'>;

const mapById = (users: MyUser[]): Record<MyUser['id'], UserWithoutId> =>
  users.reduce((a, v) => {
    const { id, ...rest } = v;
    return { ...a, [id]: rest };
  }, {});

console.log(
  mapById([
    {
      name: 'Burak',
      id: 'bur',
    },
    {
      name: 'İpek',
      id: 'ip',
    },
  ])
);
