import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import {
  fetchPages,
  fetchPokemons,
} from "../store/reducers/ActionCreatorsPokemons";
import { PokemonItem } from "./PokemonItem";
import "./css/pokemonList.css";
import { setCurrentPage, setTotalCount } from "../store/reducers/PokemonsSlice";
import { TotalPageCount } from "./functions/TotalPageCount";
import { VievPages } from "./functions/DisplayPages";
import { Nav } from "./Nav";

export const PokemonList: FC = () => {
  const dispatch = useAppDispatch();
  const { pokemons, isLoading, error, currentPage, perPage, totalCount } =
    useAppSelector((state) => state.pokemonReducer);

  const pages = TotalPageCount(totalCount);
  const dispPages = VievPages(pages, currentPage, totalCount);

  useEffect(() => {
    dispatch(fetchPokemons(perPage));
  }, [dispatch, perPage]);

  useEffect(() => {
    dispatch(setTotalCount());
  }, [perPage, totalCount, dispatch, pokemons.results]);

  const pageChanger = (page: number) => {
    dispatch(setCurrentPage(page));
    if (page > currentPage) {
      dispatch(fetchPages(pokemons.next));
    }
    if (page < currentPage) {
      dispatch(fetchPages(pokemons.previous));
    }
  };

  return (
    <div>
      <header className="App-header">
        <Nav />
      </header>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      <div>
        <div className="poke_grid_map">
          {pokemons.results.length > 0 ? (
            pokemons.results.map((poke, i) => (
              <div key={poke.name}>
                <div className="pokemons_map_container">
                  <PokemonItem poke={poke} i={i} />
                </div>
              </div>
            ))
          ) : (
            <div className="container_not_found_search">
              <h1>
                {" "}
                Nothing was found! <br /> Please try again!
              </h1>
            </div>
          )}
        </div>
        <div className="container_set_page">
          {dispPages.length > 1 &&
            dispPages.map((page, i) => (
              <button
                className={
                  currentPage === page
                    ? "button_current_page"
                    : "button_set_page"
                }
                key={i}
                onClick={() => pageChanger(page)}
              >
                {page}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};
