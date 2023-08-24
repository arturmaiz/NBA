import { createContext, useEffect, useState } from "react";
import {
  IPlayer,
  IFavoritesContextType,
  IFavoritesProviderProps,
} from "../types";

export const FavoritesContext = createContext<IFavoritesContextType | null>(
  null
);

const FavoritesProvider: React.FC<IFavoritesProviderProps> = ({ children }) => {
  const [favorites, setFavorites] = useState<IPlayer[]>(() => {
    return JSON.parse(localStorage.getItem("favorites") || "");
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (player: IPlayer) => {
    const currentFavorites: IPlayer[] = JSON.parse(
      localStorage.getItem("favorites") || ""
    );

    const playerExists = currentFavorites.some((fav) => fav.id === player.id);

    if (playerExists) return;

    const updatedFavorites = [...currentFavorites, player];
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
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
