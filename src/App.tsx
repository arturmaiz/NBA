import { useState, useEffect, useCallback } from "react";
import PlayersList from "./components/PlayersList";
import SearchInput from "./components/SearchInput";
import FavoritesProvider from "./context/FavoritesContext";
import FavoritePlayers from "./components/FavoritePlayers";
import ColorPicker from "./components/ColorPicker";
import Navbar from "./layout/Navbar";
import { IPlayer } from "./types";

const URL = "https://www.balldontlie.io/api/v1/players";

const App = () => {
  const [players, setPlayers] = useState<IPlayer[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPlayers, setFilteredPlayers] = useState<IPlayer[]>([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setPlayers(data.data);
      } catch (error) {
        console.error("Failed to fetch players:", error);
      }
    };

    fetchPlayers();
  }, []);

  const filterPlayersBySearchTerm = useCallback((): IPlayer[] => {
    return players.filter(
      (player) =>
        doesNameIncludeTerm(player.first_name, searchTerm) ||
        doesNameIncludeTerm(player.last_name, searchTerm)
    );
  }, [players, searchTerm]);

  useEffect(() => {
    setFilteredPlayers(filterPlayersBySearchTerm());
  }, [searchTerm, players, filterPlayersBySearchTerm]);

  const doesNameIncludeTerm = (name: string, term: string): boolean => {
    return name.toLowerCase().includes(term.toLowerCase());
  };

  return (
    <FavoritesProvider>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <SearchInput
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <ColorPicker />
            {players && players.length === 0 ? (
              "Loading Players..."
            ) : (
              <PlayersList filteredPlayers={filteredPlayers} />
            )}
          </div>
          <div className="col">
            <FavoritePlayers />
          </div>
        </div>
      </div>
    </FavoritesProvider>
  );
};

export default App;
