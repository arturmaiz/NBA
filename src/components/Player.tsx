import { useContext } from "react";
import { IPlayer } from "../types";
import { FavoritesContext } from "../context/FavoritesContext";

const Player: React.FC<IPlayer> = ({
  id,
  first_name,
  last_name,
  backgroundColor,
}) => {
  const favoritesContext = useContext(FavoritesContext);

  if (!favoritesContext) {
    throw new Error(
      "Favorited players must be used within a FavoritesProvider"
    );
  }

  const { favorites, addFavorite } = favoritesContext;

  const isFavorite = favorites.some((fav) => fav.id === id);

  return (
    <li
      style={{ backgroundColor }}
      className="d-flex justify-content-between list-group-item"
    >
      {`${first_name} ${last_name}`}
      {isFavorite ? (
        <span style={{ display: "inline-block", height: "30px" }}>🌟</span>
      ) : (
        <button onClick={() => addFavorite({ id, first_name, last_name })}>
          Add to favorites 📌
        </button>
      )}
    </li>
  );
};

export default Player;
