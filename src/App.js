import { useState, useEffect } from "react";
import axios from "axios";
import PokemonList from "./components/PokemonList";
import { Pagination } from "./components/Pagination";
const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [previousPageUrl, setPreviousPageUrl] = useState();

  useEffect(() => {
    setLoading(true);
    let cansel;
    axios
      .get(currentPageUrl, {
        // To Cancel Url Request use CanselToken from axios
        cancelToken: new axios.CancelToken((c) => (cansel = c)),
      })
      .then((res) => {
        setPokemon(res.data.results.map((p) => p.name));
        setLoading(false);
        setNextPageUrl(res.data.next);
        setPreviousPageUrl(res.data.previous);
      })
      .catch((err) => {
        console.log(err);
        setLoading(true);
      });
    return () => {
      cansel();
    };
  }, [currentPageUrl]);

  if (loading) return "Loading....";
  // Function to go to next page
  const goToNextPage = () => {
    setCurrentPageUrl(nextPageUrl);
  };
  // Function to go to previous page
  const goToPreviousPage = () => {
    setCurrentPageUrl(previousPageUrl);
  };
  return (
    <>
      <PokemonList pokemon={pokemon} />
      <Pagination
        goToNextPage={nextPageUrl ? goToNextPage : null}
        goToPreviousPage={previousPageUrl ? goToPreviousPage : null}
      />
    </>
  );
};

export default App;
