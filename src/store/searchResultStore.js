import axios from "axios";
import { create } from "zustand";

let searchResult = (set) => ({
  results: [],
  searchWord: {
    title: "",
    year: "",
    type: "",
  },
  setSearch: (value) => {
    set((state) => {
      return {
        searchWord: {
          ...state.searchWord,
          ...value,
        },
      };
    });
  },
  getSearch: () => {
    try {
      set(async (state) => {
        const { title, year, type } = state.searchWord;
        const response = await axios.get(`https://omdbapi.com/?apikey=ef297970&s=${title}&y=${year}&type=${type}`);
        set({ results: response.data.Search });
      });
    } catch (error) {
      console.log(error);
    }
  },
});

export const useSearchResult = create(searchResult);
