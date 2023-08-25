import Player from "./Player";
import { IPlayersListProps } from "../types";
import { useContext } from "react";
import { ColorPickerContext } from "../context/ColorPickerContext";

const PlayersList: React.FC<IPlayersListProps> = ({ filteredPlayers }) => {
  const favoritesContext = useContext(ColorPickerContext);

  if (!favoritesContext) {
    throw new Error(
      "Favorited players must be used within a FavoritesProvider"
    );
  }

  const { backgroundColor } = favoritesContext;

  return (
    <ul style={{ backgroundColor }} className={`divide-y divide-gray-100 mt-4`}>
      {filteredPlayers && filteredPlayers.length > 0 ? (
        filteredPlayers.map((player) => <Player key={player?.id} {...player} />)
      ) : (
        <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2 py-5">
          No Players Found... 🏀
        </h2>
      )}
    </ul>
  );
};

export default PlayersList;
