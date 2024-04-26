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
  getSearch: async () => {
    try {
      set((state) => {
        const { title, year, type } = state.searchWord;
        axios
          .get(`https://omdbapi.com/?apikey=ef297970&s=${title}&y=${year}&type=${type}`)
          .then((response) => {
            set({ results: response.data.Search });
          })
          .catch((error) => {
            console.log(error);
          });
      });
    } catch (error) {
      console.log(error);
    }
  },
});

export const useSearchResult = create(searchResult);
