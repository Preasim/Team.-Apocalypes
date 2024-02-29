"use client";
import ColorButton from "@/component/ColorPicker/ColorPicker";
import TimeSelect from "../../AddRoutine/TimeSelect/TimeSelect";
import { returnCurrentTime } from "../../CalendarHeader/HeaderEventHandler";
import style from "./Seeting.module.css";
import { useState } from "react";
export default function CalendarSetting() {
  const { FullYear, FullMonth, FullDate, FullDay } = returnCurrentTime();
  const [colorState, setColorState] = useState(false);
  return (
    <div className={`${style.settingContainer} absolute settingContainer`}>
      <div>
        <div className="flex">
          <label
            htmlFor="colorPicker"
            className={`${style.colorPicker}`}
            onClick={() => setColorState(!colorState)}
          >
            <input
              type="text"
              className={`${style.colorPicker}`}
              id="colorPicker"
            />
          </label>
          <input type="text" placeholder="제목 추가" />
        </div>
        {colorState && (
          <div className={`${style.colorPickerPosition}`}>
            <ColorButton />
          </div>
        )}
      </div>
      <div className={`flex alignCenter ${style.timeStyle} mt1`}>
        <div>
          <span>{FullYear}</span>
          <span>{FullMonth}</span>
          <span>{FullDate}</span>
          <span>({FullDay})</span>
        </div>
        <span> - </span>
        <div className="flex alignCenter">
          <TimeSelect />
          <span> ~ </span>
          <TimeSelect />
        </div>
      </div>
    </div>
  );
}
