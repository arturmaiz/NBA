import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import FavoritePlayer from "./FavoritePlayer";
import styles from "../styles/FavoritePlayers.module.css";

const FavoritePlayers: React.FC = () => {
  const favoritesContext = useContext(FavoritesContext);

  if (!favoritesContext) {
    throw new Error(
      "Favorited players must be used within a FavoritesProvider"
    );
  }

  const { favorites } = favoritesContext;

  return (
    <div className="mt-3">
      <h3 className="mt-3 mb-3">Favorite Players 🌟</h3>
      <ul className={`list-group ${styles.favorites}`}>
        {favorites && favorites.length > 0
          ? favorites.map((fav) => <FavoritePlayer key={fav?.id} {...fav} />)
          : "No Favorite Players"}
      </ul>
    </div>
  );
};

export default FavoritePlayers;
