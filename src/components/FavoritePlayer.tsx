import { useContext } from "react";
import { IPlayer } from "../types";
import { FavoritesContext } from "../context/FavoritesContext";

const FavoritePlayer: React.FC<IPlayer> = ({ id, first_name, last_name }) => {
  const favoritesContext = useContext(FavoritesContext);

  const { removeFavorite } = favoritesContext;

  return (
    <li className="flex justify-between gap-x-6 py-5 px-5">
      <div className="flex min-w-0 gap-x-4">
        <p className="text-gray-900 dark:text-white text-2xl font-extrabold">
          {`${first_name} ${last_name}`}
        </p>
      </div>

      <div className="flex min-w-0 gap-x-4 sm:items-end">
        <p className="text-sm font-semibold leading-6 text-gray-900">
          <button
            className="bg-blue-100 text-blue-800 text-1xl font-medium inline-flex items-center justify-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400"
            onClick={() => removeFavorite(id)}
          >
            ❌
          </button>
        </p>
      </div>
    </li>
  );
};

export default FavoritePlayer;
