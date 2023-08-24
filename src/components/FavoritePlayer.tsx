import { useContext } from "react";
import { IPlayer } from "../types";
import { FavoritesContext } from "../context/FavoritesContext";

const FavoritePlayer: React.FC<IPlayer> = ({ id, first_name, last_name }) => {
  const favoritesContext = useContext(FavoritesContext);

  if (!favoritesContext) {
    throw new Error(
      "Favorited players must be used within a FavoritesProvider"
    );
  }

  const { removeFavorite } = favoritesContext;

  return (
    <li className="d-flex justify-content-between list-group-item">
      {`${first_name} ${last_name}`}
      <button onClick={() => removeFavorite(id)}>Delete ❌</button>
    </li>
  );
};

export default FavoritePlayer;
