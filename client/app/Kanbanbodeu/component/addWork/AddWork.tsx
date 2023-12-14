"use client";
import style from "./AddWork.module.css";
import CreateWork from "../createWork/CreateWork";
import React, { useEffect, useState } from "react";
export default function AddWork() {
  const [ItemNum, setNum] = useState<number>(0);
  const [addWorkArray, setAddWorkArray] = useState<null[]>([]);
  useEffect(() => {
    setAddWorkArray(Array.from({ length: ItemNum }));
  }, [ItemNum]);

  return (
    <div className={`${style.createWorkCardContainer} heightFull`}>
      <ul
        className={`heightFull flex flexCol  alignCenter mx2 addWorkContainer createWork`}
      >
        <li
          className={`${style.createWorkStyle} flex alignCenter fontSize2 mt3 mb3`}
        >
          <h3 className="fontWeight900 AddWorkTitle">Works</h3>
          <button
            className={`mlAuto ${style.plusStyle} cursorPointer AddWorkButtonStyle`}
            onClick={() => {
              setNum(ItemNum + 1);
            }}
          >
            +
          </button>
        </li>
        {addWorkArray.map((_, index) => (
          <li className="mb1 detailDom" key={index}>
            <CreateWork />
          </li>
        ))}
      </ul>
    </div>
  );
}
