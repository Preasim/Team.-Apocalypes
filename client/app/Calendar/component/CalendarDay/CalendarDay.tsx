"use client";
import {
  clickAndMoveHandler,
  setClickEvent,
  sceduleDomMouseUpHandler,
} from "./ClickAndMoveHandler";
import style from "./Calendar.module.css";
import { time } from "./CalendarDayData";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";

type settingDataType = {
  settingName: string;
}[];

const data = [
  {
    settingName: "이름",
  },
];

export default function CalendarDay() {
  const [dataType, setData] = useState<settingDataType>([]);
  useEffect(() => {
    setData([...dataType, ...data]);
  }, []);
  return (
    <div
      className={`${style.setCalendarStyle} ${style.overflowScroll} flex setCalendar`}
      onMouseDown={(event: React.MouseEvent) => {
        clickAndMoveHandler(event);
        setClickEvent(event);
      }}
      onMouseUp={() => {
        sceduleDomMouseUpHandler();
      }}
    >
      <div className={`${style.timeWidth} ${style.timeSize} timeContainer`}>
        {time.map((item) => (
          <div className={`${style.timeStyle}`} key={nanoid()}>
            {item}
          </div>
        ))}
      </div>

      <div className={`${style.schedule} schedule relative`}>
        {time.map(() => (
          <div
            className={`${style.scheduleLine} pointerNone`}
            key={nanoid()}
          ></div>
        ))}
      </div>
    </div>
  );
}
