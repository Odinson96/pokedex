import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPokemonPers } from "../../interfaces/IPokemonPers";
import { fetchPersPokemon } from "./ActionCreatorPokemon";

interface Pokemons {
  data: IPokemonPers | null;
  isLoading: boolean;
  error: string;
}

const initialState: Pokemons = {
  data: null,
  isLoading: false,
  error: "",
};

export const PokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPersPokemon.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchPersPokemon.fulfilled.type]: (
      state,
      action: PayloadAction<IPokemonPers>
    ) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = "";
    },
    [fetchPersPokemon.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.error = action.payload;
    },
  },
});

export default PokemonSlice.reducer;
