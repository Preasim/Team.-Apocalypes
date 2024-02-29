"use client";
import style from "./AddWork.module.css";
import CreateWork from "../CreateWork/CreateWork";
import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { setCreateWork } from "./AddworkHandler";
import { BoardSearch } from "@/app/fetch/CreateWorkListFetch/GET";

export type WorkArrayType = {
  name: string;
};

export default function AddWork() {
  // 추후 데이터가 들어있는 배열로 변경만 하면 됌
  const [addWorkArray, setAddWorkArray] = useState<WorkArrayType[]>([]);
  useEffect(() => {
    //api에서 데이터를 받아오기 필요
    // const BoardData = BoardSearch(); // 멤버 id 필요( 추후 멈베 api를 연동하고 입력 )
    // setAddWorkArray(BoardData);
  }, []);

  return (
    <div
      className={`${style.createWorkCardContainer} heightFull createWorkContainer`}
    >
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
              setCreateWork();
            }}
          >
            +
          </button>
        </li>
        {addWorkArray.map((item) => (
          <li className="mb1 detailLi" key={nanoid()}>
            <CreateWork placeName={item.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}
