import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPokemon } from "../../interfaces/IPokemon";
import { IPokemonPers } from "../../interfaces/IPokemonPers";
import { fetchPages, fetchPokemons } from "./ActionCreatorsPokemons";

export interface PokemonObject {
  count: number;
  next: string;
  previous: null | string;
  results: IPokemon[];
  data: IPokemonPers[];
}

interface Pokemons {
  pokemons: PokemonObject;
  isLoading: boolean;
  error: string;
  currentPage: number;
  perPage: number;
  totalCount: number;
}

const initialState: Pokemons = {
  pokemons: {
    count: 0,
    next: "",
    previous: null,
    results: [
      {
        url: "",
        name: "",
      },
    ],
    data: [],
  },
  isLoading: false,
  error: "",
  currentPage: 1,
  perPage: 10,
  totalCount: 2,
};

export const PokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    filterByName(state) {
      state.pokemons.results.sort((a, b) => (a.name > b.name ? 1 : -1));
    },
    findByName(state, action: PayloadAction<string>) {
      state.pokemons.results = state.pokemons.results.filter((el) =>
        el.name.includes(action.payload)
      );
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setItemsPerPage(state, action: PayloadAction<number>) {
      state.perPage = action.payload;
    },
    setTotalCount(state) {
      state.totalCount = Math.ceil(state.pokemons.count / state.perPage);
    },
  },
  extraReducers: {
    [fetchPokemons.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchPokemons.fulfilled.type]: (
      state,
      action: PayloadAction<PokemonObject>
    ) => {
      state.isLoading = false;
      state.pokemons = action.payload;
      state.error = "";
      state.totalCount = Math.ceil(state.pokemons.count / state.perPage);
    },
    [fetchPokemons.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    [fetchPages.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchPages.fulfilled.type]: (
      state,
      action: PayloadAction<PokemonObject>
    ) => {
      state.isLoading = false;
      state.pokemons = action.payload;
      state.error = "";
      state.totalCount = Math.ceil(state.pokemons.count / state.perPage);
    },
  },
});
export const {
  filterByName,
  findByName,
  setCurrentPage,
  setItemsPerPage,
  setTotalCount,
} = PokemonSlice.actions;
export default PokemonSlice.reducer;
