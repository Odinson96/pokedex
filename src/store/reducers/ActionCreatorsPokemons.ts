import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPokemons = createAsyncThunk(
  "pokemons/fetchAll",
  async (perPage: number, thunkAPI) => {
    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=0`
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        "Lost connection with server! Please try again later!"
      );
    }
  }
);

export const fetchPages = createAsyncThunk(
  "pokemons/fetchPages",
  async (url: string | null, thunkAPI) => {
    try {
      const res = await axios.get(`${url}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        "Lost connection with server! Please try again later!"
      );
    }
  }
);
