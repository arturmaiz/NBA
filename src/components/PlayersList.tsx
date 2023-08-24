import Player from "./Player";
import { IPlayersListProps } from "../types";
import styles from "../styles/PlayersList.module.css";

const PlayersList: React.FC<IPlayersListProps> = ({ filteredPlayers }) => {
  console.log("filteredPlayers:", filteredPlayers);
  return (
    <ul className={`list-group ${styles.players}`}>
      {filteredPlayers && filteredPlayers.length > 0
        ? filteredPlayers.map((player) => (
            <Player key={player?.id} {...player} />
          ))
        : "No Players Found 😞"}
    </ul>
  );
};

export default PlayersList;
