import { useState, useEffect, useCallback } from "react";
import PlayersList from "./components/PlayersList";
import SearchInput from "./components/SearchInput";
import FavoritesProvider from "./context/FavoritesContext";
import ColorPickerProvider from "./context/ColorPickerContext";
import FavoritePlayers from "./components/FavoritePlayers";
import ColorPicker from "./components/ColorPicker";
import { IPlayer } from "./types";
import Footer from "./components/Footer";
import Header from "./components/Header";

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
      <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-1 bg-dark dark:bg-gray-900">
        <Header />
        <div className="grid md:grid-cols-2 gap-8">
          <ColorPickerProvider>
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-12">
              <ColorPicker />
              <SearchInput
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
              {players && players.length === 0 ? (
                <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2 py-5">
                  Loading Players... 🏀
                </h2>
              ) : (
                <PlayersList filteredPlayers={filteredPlayers} />
              )}
            </div>
          </ColorPickerProvider>
          <FavoritePlayers />
        </div>
        <Footer />
      </div>
    </FavoritesProvider>
  );
};

export default App;
