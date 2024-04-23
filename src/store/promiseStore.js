import axios from "axios";
import { create } from "zustand";

let promiseStore = (set) => ({
  movies: [],
  bestMovies: [],
  setPromise: async (ids) => {
    try {
      const response = await Promise.all(ids.map((id) => axios.get(`https://omdbapi.com/?apikey=ef297970&i=${id}`)));
      const movieData = response.map((response) => response.data);
      set(() => ({
        movies: movieData,
      }));
    } catch (error) {
      console.log(error);
    }
  },
  setBestPromise: async (ids) => {
    try {
      const response = await Promise.all(ids.map((id) => axios.get(`https://omdbapi.com/?apikey=ef297970&i=${id}`)));
      const movieData = response.map((response) => response.data);
      set(() => ({
        bestMovies: movieData,
      }));
    } catch (error) {
      console.log(error);
    }
  },
});

export const usePromiseStore = create(promiseStore);
