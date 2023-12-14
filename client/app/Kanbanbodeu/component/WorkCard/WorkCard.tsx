"use client";
import style from "./WorkCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faImage,
  faLink,
  faList,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import { useEffect, useState } from "react";
import {
  WorkCardSlideMouseDownHandler,
  AddWorkClickHandler,
  cancleAddWork,
  init,
} from "./WorkCardHandler";
import { imgInput } from "./WorkCardHandler";

type propsType = {
  title: string;
};

export default function WorkCard(props: propsType) {
  const [startDate, setDate] = useState<Date | null>(null);
  const [imgName, setImgName] = useState<string>("사진 추가");

  useEffect(() => {
    init();
  }, []);
  return (
    <div
      className={`flex flexCol justifyBetween ${style.cardSize} ${style.cardStyle} p1 BoxSizingborderBox relative WorkCard`}
    >
      <h4 className={`${style.CardTitle} mainText`}>{props.title}</h4>
      <div
        className={`draggable absolute ${style.addWorkPagePosition} ${style.addWorkPageSize} ${style.addWOrkPageStyle} addWorkPageStyle`}
      >
        <div
          className={`absolute ${style.cursorRowResize} ${style.cursorPosition}`}
          onMouseDown={(event) => {
            WorkCardSlideMouseDownHandler(event);
          }}
        />
        <div className={`widthFull heightFull ${style.hidden} relative`}>
          <button
            className={`absolute ${style.cancelButtonPosition} ${style.cancelButtonStyle} cursorPointer`}
            onClick={cancleAddWork}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <form className="heightFull widthFull flex flexCol BoxSizingborderBox">
            <ul
              className={`heightFull widthFull flex flexCol ${style.addWorkCardUlStyle} BoxSizingborderBox addWorkCard`}
            >
              <li>
                <input
                  type="text"
                  placeholder="이름"
                  className={`${style.workTitleStyle}`}
                />
              </li>
              <li className="flex alignCenter relative">
                <div>
                  <FontAwesomeIcon icon={faCalendar} />
                </div>
                <div>
                  <DatePicker
                    dateFormat="yyyy년 MM월 dd일" // 날짜 형태
                    shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
                    onChange={(date) => setDate(date)}
                    locale={ko}
                    className={` ${style.datePickerPosition}`}
                    placeholderText="날짜 설정"
                    selected={startDate}
                    id="date"
                  />
                </div>
              </li>
              <li className="flex alignCenter">
                <div>
                  <FontAwesomeIcon icon={faList} />
                </div>
                <div>
                  <input placeholder="설명 추가" type="text" />
                </div>
              </li>
              <li className="flex alignCenter">
                <div>
                  <FontAwesomeIcon icon={faLink} />
                </div>
                <div>
                  <input placeholder="링크 추가" type="text" />
                </div>
              </li>
              <li className="flex alignCenter">
                <div>
                  <FontAwesomeIcon icon={faImage} />
                </div>
                <div>
                  <label htmlFor="imgInput" className="imgInput">
                    <input
                      placeholder="사진 추가"
                      type="file"
                      accept="image/*"
                      className={`${style.imgInput} displayNone`}
                      id="imgInput"
                      onChange={(event) => {
                        imgInput(event, setImgName);
                      }}
                    />
                    {imgName}
                  </label>
                </div>
              </li>
            </ul>
          </form>
        </div>
      </div>
      <button
        className={`flex alignCenter cursorPointer fontSize1 ${style.buttonSize}`}
        onClick={AddWorkClickHandler}
      >
        <span className={`${style.PlusStyle}`}>+</span>
        <span>작업 추가</span>
      </button>
    </div>
  );
}
