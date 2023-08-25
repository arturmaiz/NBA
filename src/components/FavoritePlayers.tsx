import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import FavoritePlayer from "./FavoritePlayer";

const FavoritePlayers: React.FC = () => {
  const favoritesContext = useContext(FavoritesContext);

  if (!favoritesContext) {
    throw new Error(
      "Favorited players must be used within a FavoritesProvider"
    );
  }

  const { favorites } = favoritesContext;

  return (
    <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 h-[627px] overflow-y-auto">
      <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
        Favorite Players 🌟
      </h2>
      <ul className="divide-y divide-gray-100">
        {favorites && favorites.length > 0 ? (
          favorites.map((fav) => <FavoritePlayer key={fav?.id} {...fav} />)
        ) : (
          <h2 className="text-gray-900 dark:text-white text-1xl font-extrabold mb-2 py-5">
            You currently have no players in your favorites 📌
          </h2>
        )}
      </ul>
    </div>
  );
};

export default FavoritePlayers;
