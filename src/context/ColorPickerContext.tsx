import { createContext, useState } from "react";
import { ColorPickerContextValue, ColorPickerProviderProps } from "../types";

export const ColorPickerContext = createContext<ColorPickerContextValue | null>(
  null
);

const ColorPickerProvider: React.FC<ColorPickerProviderProps> = ({
  children,
}) => {
  const [backgroundColor, setBackgroundColor] = useState("#1f2937");

  return (
    <ColorPickerContext.Provider
      value={{ backgroundColor, setBackgroundColor }}
    >
      {children}
    </ColorPickerContext.Provider>
  );
};

export default ColorPickerProvider;
