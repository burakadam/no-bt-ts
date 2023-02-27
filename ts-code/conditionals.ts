interface PokemonResults {
  count: number;
  next?: string;
  previous?: string;
  results: {
    name: string;
    url: string;
  }[];
}

type FetchPokemonResult<T> = T extends undefined
  ? Promise<PokemonResults>
  : void;

const fetchPokemon = <T extends undefined | ((data: PokemonResults) => void)>(
  url: string,
  cb?: T
): FetchPokemonResult<T> => {
  if (cb) {
    fetch(url)
      .then((resp) => resp.json())
      .then(cb);

    return undefined as FetchPokemonResult<T>;
  } else {
    return fetch(url).then((resp) => resp.json()) as FetchPokemonResult<T>;
  }
};

// fetchPokemon('https://pokeapi.co/api/v2/pokemon?limit=10', (data) => {
//   data.results.forEach((element) => console.log(element));
// });

(async function () {
  const pokemons = <PokemonResults>(
    await fetchPokemon('https://pokeapi.co/api/v2/pokemon?limit=10')
  );
  pokemons.results.forEach((element) => console.log(element));
})();
