import { useState } from "react";
import styles from "../styles/ColorPicker.module.css";

const ColorPicker = () => {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");

  return (
    <div className="input-group mt-3 mb-3">
      <label htmlFor="background" className={styles.label}>
        Change list background 🎨
      </label>
      <input
        className={styles.input}
        type="color"
        id="background"
        value={backgroundColor}
        onChange={(e) => setBackgroundColor(e.target.value)}
      />
    </div>
  );
};

export default ColorPicker;
