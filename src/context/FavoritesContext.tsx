import { createContext, useEffect, useState } from "react";
import {
  IPlayer,
  IFavoritesContextType,
  IFavoritesProviderProps,
} from "../types";

const initialContext: IFavoritesContextType = {
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
};

export const FavoritesContext =
  createContext<IFavoritesContextType>(initialContext);

const FavoritesProvider: React.FC<IFavoritesProviderProps> = ({ children }) => {
  const [favorites, setFavorites] = useState<IPlayer[]>(() => {
    return JSON.parse(localStorage.getItem("favorites") || "[]");
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (player: IPlayer) => {
    const playerExists = favorites.some((fav) => fav.id === player.id);

    if (!playerExists) {
      setFavorites((prev) => [...prev, player]);
    }
  };

  const removeFavorite = (id: number) => {
    setFavorites((prev) => prev.filter((player) => player.id !== id));
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
