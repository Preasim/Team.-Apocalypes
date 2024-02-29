"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import TimeSelect from "./TimeSelect/TimeSelect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faListUl } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import ColorPicker from "@/component/ColorPicker/ColorPicker";
import style from "./AddRoutine.module.css";
import { selectColor, createTagHandler } from "./AddRoutineHandler";

export default function AddRoutine() {
  const [colorPickerState, setColorState] = useState(false);
  useEffect(() => {
    // 여기에 AddRoutine이 나올때 마다 데이터 요청및 뿌리기 로직
  }, []);
  return (
    <div className={`${style.addRoutineStyle} fixed relative`} id="addRoutine">
      <button className={`absolute ${style.cancelButtonStyle}`}>x</button>
      <div className={`flex alignCenter ${style.firstBox}`}>
        <input type="text" placeholder="이름" />
        <div
          className={`relative flex alignCenter`}
          onClick={(event) =>
            selectColor(event, colorPickerState, setColorState)
          }
        >
          <div className={`${style.colorPicker} colorPickerContainer`}>
            {colorPickerState && (
              <div
                className={`absolute ${style.colorPickerPosition} colorPicker`}
              >
                
                <ColorPicker />
              </div>
            )}
          </div>
          <div className="ml1">
            <FontAwesomeIcon icon={faCaretDown} className="fontSize2" />
          </div>
        </div>
      </div>
      <div>
        <ul className={`${style.useSelectBox}`}>
          <li className="flex">
            <FontAwesomeIcon icon={faClock} />
            <div className="widthFull">
              <form action="" method="post" className="flex alignCenter">
                <div className="ml1 mr1">
                  <TimeSelect />
                </div>
                <span>-</span>
                <div className="ml1">
                  <TimeSelect />
                </div>
              </form>
            </div>
          </li>
          <li className={`flex alignEnd  relative`}>
            <div className="flex alignEnd">
              <FontAwesomeIcon icon={faTag} />
            </div>
            <div>
              <form onSubmit={createTagHandler} className="TagForm flex">
                <input
                  className={`ml1 ${style.tagInput} tagInput heightFull`}
                  placeholder="태그 추가"
                />
              </form>
            </div>
          </li>
          <li>
            <FontAwesomeIcon icon={faListUl} />
            <input
              className={`ml1 ${style.DescInput}`}
              placeholder="설명추가"
            />
          </li>
        </ul>
      </div>
      <div className="flex userSelectBox">
        <div>
          <ul>
            <li>PC 알림</li>
            <li>핸드폰 알림</li>
            <li>알림 설정</li>
          </ul>
        </div>
        <div className={`flex flexCol ${style.optionSelectContainer} ml2`}>
          <label htmlFor="checkbox1">
            <input
              type="checkbox"
              className="displayNone checkBoxInput"
              id="checkbox1"
            />
            <span className={` ${style.checkbox}`}></span>
          </label>
          <label htmlFor="checkbox2">
            <input
              type="checkbox"
              className="displayNone checkBoxInput"
              id="checkbox2"
            />
            <span className={` ${style.checkbox}`}></span>
          </label>
          <select name="" id="" className={`mt2 ${style.timeSelect}`}>
            <option value="5">5분전</option>
            <option value="10">10분전</option>
          </select>
        </div>
      </div>
    </div>
  );
}
