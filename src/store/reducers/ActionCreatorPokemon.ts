import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPersPokemon = createAsyncThunk(
  "pokemons/fetchPersPokemon",
  async (url: string | undefined, thunkAPI) => {
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${url}/`);
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        "Lost connection with server! Please try again later!"
      );
    }
  }
);
