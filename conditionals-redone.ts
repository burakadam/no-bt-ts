interface PokemonResults {
  count: number;
  next?: string;
  previous?: string;
  results: {
    name: string;
    url: string;
  }[];
}

type fetchPokemon2Result2<T> = T extends undefined
  ? Promise<PokemonResults>
  : void;

function fetchPokemon2(url: string, cb: (data: PokemonResults) => void): void;
function fetchPokemon2(url: string): Promise<PokemonResults>;
function fetchPokemon2(
  arg1: string,
  arg2?: (data: PokemonResults) => void
): unknown {
  if (arg2) {
    fetch(arg1)
      .then((resp) => resp.json())
      .then(arg2);

    return undefined;
  } else {
    return fetch(arg1).then((resp) => resp.json());
  }
}

fetchPokemon2('https://pokeapi.co/api/v2/pokemon?limit=10', (data) => {
  data.results.forEach((element) => console.log(element));
});

// (async function () {
//   const pokemons = await fetchPokemon2(
//     'https://pokeapi.co/api/v2/pokemon?limit=10'
//   );

//   pokemons.results.forEach((element) => console.log(element));
// })();
