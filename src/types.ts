export interface IPlayer {
  id: number;
  first_name: string;
  last_name: string;
  backgroundColor?: string;
}

export interface IPlayersListProps {
  filteredPlayers: IPlayer[];
}

export interface ISearchInputProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

export interface IFavoritesContextType {
  favorites: IPlayer[];
  addFavorite: (player: IPlayer) => void;
  removeFavorite: (id: number) => void;
}

export interface IFavoritesProviderProps {
  children: React.ReactNode;
}
