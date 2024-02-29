import React, { useState } from "react";
import style from "./ColorPicker.module.css";
import { CirclePicker } from "react-color";
import { colorPickerHandler } from "./ColorPickerHandler";

const ColorPicker = () => {
  const [color, setColor] = useState("#000");

  const handleChangeComplete = (color: any) => {
    setColor(color.hex);
    colorPickerHandler(color);
  };

  return (
    <div className={`${style.colorPickerContainer}`}>
      <CirclePicker color={color} onChangeComplete={handleChangeComplete} />
    </div>
  );
};

export default ColorPicker;
