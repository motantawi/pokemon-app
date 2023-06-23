import React from "react";

const PokemonList = ({ pokemon }) => {
  return (
    <div>
      {pokemon.length >= 1 ? (
        pokemon.map((p) => <div key={Math.random()}>{p}</div>)
      ) : (
        <div>No Data Found</div>
      )}
    </div>
  );
};

export default PokemonList;
