"use client";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import style from "./DatePicker.module.css";
import "./DatePickerStyle.css";
import { getInputColor } from "./DatePickerSetCalendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faPlus } from "@fortawesome/free-solid-svg-icons";
import { SelectCalendarHandler } from "../CalendarHeader/HeaderEventHandler";
import { nanoid } from "nanoid";
import { ToggleCalendarBoxVisible } from "../CalendarHeader/HeaderEventHandler";
import React from "react";

type propsType = {
  startDate: Date;
  currentDate: Date;
  setDate: Dispatch<SetStateAction<Date>>;
  setStartDate: Dispatch<SetStateAction<Date>>;
};
export default function DatePickerDom(props: propsType) {
  const [teamArray, setTeamArray] = useState<null[]>([]);
  const [ArrayNum, setArrayNum] = useState<number>(0);
  useEffect(() => {}, [props.currentDate]);
  useEffect(() => {
    setTeamArray(Array.from({ length: ArrayNum }));
  }, [ArrayNum]);
  return (
    <div
      className={`removeTriangle absolute ${style.datePosition} ${style.dateStyle} displayNone`}
      onClick={SelectCalendarHandler}
    >
      <div className={`widthFull ${style.dateContainer} dateContainer`}>
        <DatePicker
          dateFormat="yyyy년 MM월 dd일" // 날짜 형태
          onChange={(date) => {
            if (date) props.setDate(date);
          }}
          locale={ko}
          inline
          className={`datePickerPosition opacityNone absolute pointerNone`}
          selected={props.currentDate}
          minDate={props.startDate}
          id="date"
        />
      </div>
      <div className={`${style.teamContainer} teamContainer`}>
        <div className="flex flexCol">
          <div className="flex mainText">
            <span className={`${style.teamFont}`}>공유 캘린더</span>
            <div className="ml1 ">
              <button
                className="cursorPointer"
                onClick={() => setArrayNum(ArrayNum + 1)}
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
              <button
                className="cursorPointer"
                onClick={ToggleCalendarBoxVisible}
              >
                <FontAwesomeIcon icon={faChevronDown} />
              </button>
            </div>
          </div>
          <div className={`mt1`}>
            <ul className="checkBoxContainer show displayNone">
              {Array.from({ length: ArrayNum }).map((_, index) => (
                <li
                  className={`flex alignCenter ${style.teamCheckBox}`}
                  key={nanoid()}
                >
                  <label
                    className={`cursorPointer ${style.checkBox}`}
                    htmlFor={`checkbox${index}`}
                    id={`checkBoxBg${index}`}
                  >
                    <input type="checkBox" id={`checkbox${index}`} />
                    <span className={`${style.icon}`} />
                  </label>
                  <div className={`${style.teamNameContainer}`}>
                    <span
                      className={`widthFull ${style.teamName}`}
                      contentEditable
                    />
                  </div>
                  <label
                    className={`${style.viewColor} relative`}
                    id={`PickerContent${index}`}
                  >
                    <input
                      type="color"
                      className="absolute opacityNone"
                      id={`ColorPicker${index}`}
                      onChange={() => getInputColor(index)}
                    />
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
