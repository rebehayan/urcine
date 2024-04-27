import axios from "axios";
import { create } from "zustand";

let searchResult = (set) => ({
  totalResults: 0,
  results: [],
  searchWord: {
    title: "",
    year: "",
    type: "",
    page: 1,
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
        const { title, year, type, page } = state.searchWord;
        const response = await axios.get(`https://omdbapi.com/?apikey=ef297970&s=${title}&y=${year}&type=${type}&page=${page}`);
        set((state) => ({
          results: response.data.Search,
          totalResults: response.data.totalResults,
          // results: [...state.results, ...response.data.Search],
          // searchWord: { ...state.searchWord, page: state.searchWord.page + 1 },
        }));
      });
    } catch (error) {
      console.log(error);
    }
  },
});

export const useSearchResult = create(searchResult);
