import { useContext } from "react";
import { ColorPickerContext } from "../context/ColorPickerContext";

const ColorPicker = () => {
  const favoritesContext = useContext(ColorPickerContext);

  if (!favoritesContext) {
    throw new Error(
      "Favorited players must be used within a FavoritesProvider"
    );
  }

  const { backgroundColor, setBackgroundColor } = favoritesContext;

  return (
    <div className="flex w-full pt-4 pb-4">
      <label
        className="text-gray-900 text-s block w-full dark:text-white mb-2"
        htmlFor="background"
      >
        Change list background
        <input
          id="background"
          type="color"
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
          className="cursor-pointer ml-4"
        />
      </label>
    </div>
  );
};

export default ColorPicker;
