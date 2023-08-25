import { useContext } from "react";
import Player from "./Player";
import { IPlayersListProps, IColorPickerContextValue } from "../types";
import { ColorPickerContext } from "../context/ColorPickerContext";

const PlayersList: React.FC<IPlayersListProps> = ({ filteredPlayers }) => {
  const colorPickerContext = useContext(
    ColorPickerContext
  ) as IColorPickerContextValue;

  const { backgroundColor } = colorPickerContext;

  return (
    <ul
      style={{ backgroundColor }}
      className={`divide-y divide-gray-100 mt-4 h-[420px] overflow-y-auto`}
    >
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
