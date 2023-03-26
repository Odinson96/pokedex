import { useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { fetchPersPokemon } from "../store/reducers/ActionCreatorPokemon";
import "./css/pokemonPage.css";

export const PokemonPage = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const { data, isLoading, error } = useAppSelector(
    (state) => state.pokemonPersReducer
  );

  useEffect(() => {
    dispatch(fetchPersPokemon(params.name));
  }, [dispatch, params.name]);

  return (
    <div className="pokemon_page_container">
      <Link to="/" className="link_poke_page">
        &lt;
      </Link>
      {!isLoading ? (
        <div>
          <h1>Name: {params.name?.toLocaleUpperCase()}</h1>
          <div className="pokemon_page_grid">
            <div>
              <h1>Front:</h1>
              <img
                src={data?.sprites.front_default}
                alt={params.name + " front"}
              />
            </div>
            <div>
              <h1>Back:</h1>
              <img
                src={data?.sprites.back_default}
                alt={params.name + " back"}
              />
            </div>
            <h1>Types:</h1>
            <h1 className={data?.types?.[0].type.name}>
              {" "}
              {data?.types[0].type.name}
            </h1>
            <h1>Weight:</h1>
            <h1> {data?.weight}</h1>
            <h1>Base experiens: </h1>
            <h1>{data?.base_experience}</h1>
          </div>
        </div>
      ) : isLoading ? (
        <h1>Loading...</h1>
      ) : error.length > 5 ? (
        <h1>{error}</h1>
      ) : (
        <h1>Lost connection</h1>
      )}
    </div>
  );
};
