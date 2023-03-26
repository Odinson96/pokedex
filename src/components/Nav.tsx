import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { fetchPokemons } from "../store/reducers/ActionCreatorsPokemons";
import {
  filterByName,
  findByName,
  setItemsPerPage,
} from "../store/reducers/PokemonsSlice";

export const Nav = () => {
  const dispatch = useAppDispatch();
  const [filter, setFilter] = useState<boolean>(false);
  const { perPage } = useAppSelector((state) => state.pokemonReducer);

  const [text, setText] = useState<string>("");

  const sortByName = () => {
    dispatch(filterByName());
    setFilter(true);
  };

  useEffect(() => {
    if (filter) {
      sortByName();
    }
  });

  const handSearch = (e: any) => {
    setText(e.target.value);
    dispatch(findByName(text));
  };

  const updateSearch = (e: any) => {
    if (e.keyCode === 8) {
      setText("");
      setTimeout(() => {
        dispatch(fetchPokemons(perPage));
      }, 500);
    }
  };

  return (
    <div>
      <input
        type="text"
        className="input_search_pokelist"
        placeholder="Type to search"
        onKeyDown={(e) => updateSearch(e)}
        value={text}
        onChange={(e) => handSearch(e)}
      />
      <div className="upper_toolbar_pokelist">
        <button className="sort_by_name_btn" onClick={() => sortByName()}>
          Sort by name
        </button>
        <button
          className="sort_by_name_btn"
          onClick={() => dispatch(setItemsPerPage(10))}
        >
          10 per page
        </button>
        <button
          className="sort_by_name_btn"
          onClick={() => dispatch(setItemsPerPage(20))}
        >
          20 per page
        </button>
        <button
          className="sort_by_name_btn"
          onClick={() => dispatch(setItemsPerPage(50))}
        >
          50 per page
        </button>
      </div>
    </div>
  );
};
