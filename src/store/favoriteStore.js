import axios from "axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";

let favoriteStore = (set) => ({
  favoriteList: [],
  setFavorite: (value) => {
    set((state) => ({
      favoriteList: [...state.favoriteList, ...value],
    }));
  },
});

favoriteStore = persist(favoriteStore, {
  name: "favorite",
});

export const useFavoriteStore = create(favoriteStore);
