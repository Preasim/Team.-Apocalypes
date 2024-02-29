"use client";
import Logo from "@/app/NonLogin/component/Logo/Logo";
import style from "./Header.module.css";
import {
  UserProfileHandler,
  moveToDay,
  nextDay,
  prevDay,
  visibleCalendar,
} from "./HeaderEventHandler";
import { HambergerHandler } from "./HeaderEventHandler";
import SlideMenu from "./SliderMenu/SlideMenu";
import DetailUserProfile from "./DetailProfile/DetailUserProfile";
import { init } from "./HeaderEventHandler";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faSortDown } from "@fortawesome/free-solid-svg-icons";
import DatePickerDom from "./../DatePicker/DatePicker";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { returnCurrentTime } from "./HeaderEventHandler";
export default function LoginHeader() {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [currentDate, setDate] = useState<Date>(new Date());
  const { FullYear, FullMonth, FullDate, FullDay } = returnCurrentTime();

  useEffect(() => {
    init();
  }, []);
  return (
    <header className={`${style.LoginHeader} widthFull flex`}>
      <div className={`${style.headerLeftArea}`}>
        <ul className={`flex justifyBetween alignCenter ml3 heightFull`}>
          <li className="heightFull">
            <div className="flex justifyCenter alignCenter heightFull ">
              <div className={`${style.labelContainer} mr2 `}>
                <input
                  type="checkBox"
                  className="displayNone"
                  id="hambergerCalendar"
                  defaultChecked
                />
                <label
                  htmlFor={`hambergerCalendar`}
                  className={`${style.labelStyle} cursorPointer hambergerMenu`}
                  onClick={HambergerHandler}
                />
                <span className={`${style.hambergerMenuBar} hamberger`} />
                <span className={`${style.hambergerMenuBar} hamberger`} />
                <span className={`${style.hambergerMenuBar} hamberger`} />
                <SlideMenu />
              </div>
              <div>
                <Logo />
              </div>
            </div>
          </li>
          <li className="flex alignCenter relative dateContainer">
            <label
              htmlFor="date"
              className={`cursorPointer fontSize2 ${style.calendarButtonStyle} calendar`}
              role="button"
              onClick={visibleCalendar}
            >
              <FontAwesomeIcon icon={faCalendar} className="pointerNone" />
            </label>
            <DatePickerDom
              startDate={startDate}
              currentDate={currentDate}
              setStartDate={setStartDate}
              setDate={setDate}
            />
          </li>
          <li className="flex alignCenter">
            <button
              className={`${style.DateArrowStyle} flex alignCenter cursorPointer`}
              onClick={() => prevDay(setDate, currentDate)}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <p className={`${style.fullDaysStyle} mainText mx2`}>
              <span>{FullYear}</span>
              <span className="ml1">{FullMonth}</span>
              <span className="ml1">{FullDate}</span>
              <span className="ml1">{`(${FullDay})`}</span>
            </p>
            <button
              className={`${style.DateArrowStyle} flex alignCenter cursorPointer`}
              onClick={() => nextDay(setDate, currentDate)}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </li>
        </ul>
      </div>
      <div className={`${style.headerRightArea} mlAuto`}>
        <div className="flex justifyEnd alignCenter mr3 heightFull">
          <div className={`flex alignCenter ${style.headerRightOption} mr2`}>
            <div className={` ${style.moveToDayContainer}`}>
              <button
                className={`mainText cursorPointer ${style.moveToDayButton}`}
                onClick={() => moveToDay(setDate)}
              >
                오늘
              </button>
            </div>
            <div className={`widthFull heightFull ${style.selectBox} relative`}>
              <FontAwesomeIcon
                icon={faSortDown}
                className={`absolute ${style.selectArrowPosition} pointerNone`}
              />
              <form action="">
                <select
                  name="showCalendarList"
                  className={`${style.selectContainer} cursorPointer`}
                >
                  <option value="일">일</option>
                  <option value="4일">4일</option>
                  <option value="주">주</option>
                  <option value="월">월</option>
                  <option value="년">년</option>
                  <option value="일정">일정</option>
                </select>
              </form>
            </div>
          </div>
          <div className="flex alignCenter heightFull relative">
            <figure
              className={`${style.figureSize} ${style.figureStyle} cursorPointer`}
            >
              <img
                className="heightFull"
                src="/img/profile.png"
                alt="프로필 이미지"
                onClick={UserProfileHandler}
              />
            </figure>
            <DetailUserProfile />
          </div>
        </div>
      </div>
    </header>
  );
}
