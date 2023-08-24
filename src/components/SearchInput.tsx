import { ISearchInputProps } from "../types";
import styles from "../styles/Search.module.css";

const SearchInput: React.FC<ISearchInputProps> = ({
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <input
      className={`form-control mt-3 mb-3 ${styles.search}`}
      aria-label="Search"
      type="search"
      placeholder="Search for a player"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchInput;
