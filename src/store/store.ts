import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import pokemonReducer from "./reducers/PokemonsSlice";
import pokemonPersReducer from "./reducers/PersonPokeSlice";

const rootReducer = combineReducers({
  pokemonReducer,
  pokemonPersReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
