"use client";
import style from "./CreateWork.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { removeDetailDom, removeWorkDom } from "./CreateWorkEventHandler";
import React, { useState, useEffect } from "react";
import { showAndHideDetail } from "./CreateWorkEventHandler";

export default function CreateWork() {
  const [ItemNum, setItem] = useState<number>(0);
  const [addWorkArray, setAddWorkArray] = useState<null[]>([]);
  useEffect(() => {
    setAddWorkArray(Array.from({ length: ItemNum }));
  }, [ItemNum]);
  return (
    <div className="widthFull flex flexCol">
      <div className="flex">
        <div className={`${style.TitleContainerStyle}`}>
          <input
            className={`${style.titleStyle}`}
            placeholder="장소를 입력하세요"
          />
        </div>
        <div
          className={`mlAuto ${style.buttonContainer} BoxSizingborderBox flex`}
        >
          <button
            className={`${style.buttonSize} cursorPointer`}
            onClick={removeWorkDom}
          >
            <FontAwesomeIcon
              icon={faXmark}
              className={`${style.SvgPointerNone} ${style.SvgPointerNone}`}
            />
          </button>
          <button
            className={`${style.buttonSize} cursorPointer`}
            onClick={() => setItem(ItemNum + 1)}
          >
            <FontAwesomeIcon
              icon={faPlus}
              className={`${style.SvgPointerNone}`}
            />
          </button>

          <button
            className={`${style.buttonSize} cursorPointer`}
            onClick={showAndHideDetail}
          >
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`${style.SvgPointerNone}`}
            />
          </button>
        </div>
      </div>
      <div className="detailDom">
        {addWorkArray.map((_, index) => (
          <div
            className={`flex ${style.detailContainer} mt1 detailContainer`}
            key={index}
          >
            <div className="mlAuto">
              <input
                type="text"
                className={`${style.detail} mlAuto widthFull`}
                placeholder="세부일정을 입력하세요"
              />
            </div>
            <div className={`${style.detailStyle}`}>
              <button
                className={`cursorPointer`}
                onClick={(event) => removeDetailDom(event)}
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
