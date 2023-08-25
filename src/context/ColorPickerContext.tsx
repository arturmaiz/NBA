import { createContext, useState } from "react";
import { IColorPickerContextValue, IColorPickerProviderProps } from "../types";

export const ColorPickerContext =
  createContext<IColorPickerContextValue | null>(null);

const ColorPickerProvider: React.FC<IColorPickerProviderProps> = ({
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
