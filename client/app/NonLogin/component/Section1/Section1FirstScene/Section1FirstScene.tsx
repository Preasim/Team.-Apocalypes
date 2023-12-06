import React from "react";
import style from "../Section1.module.css";
import LoginButton from "@/component/LoginButton/LoginButton";
import SignUpButton from "@/component/Header/SignUpButton/SignUpButton";

export default function Section1FirstScene() {
  return (
    <div
      className={`widthFull fixed alignCenter justifyCenter ${style.FirstImgPosition} displayNone activeSceneFlex0`}
    >
      <figure className={` ${style.FigureSize}`} id="TetoImg1">
        <img src="/TeToImg/tetoLogo4.png" alt="TeTo 이미지1" />
      </figure>
      <div className={`flex flexCol`} id="messageA">
        <div className={`flex flexCol firstPartText`}>
          <p className="fontSize2 fontWeight900 mb2 krTitle">
            하루 일정을 계획하고 공유하는 캘린더
          </p>
          <p
            className={`${style.FirstPartTextLineHeight} fontWeight600 mainText`}
          >
            TETO는 개인 및 그룹의 일정을 관리하고 공유할 수 있는 강력한
            도구입니다.
            <br />
            하루를 계획하는데 소요되는 시간을 최소화하고 실행에 집중하세요.
          </p>
        </div>
        <div className="flex alignCenter mt2">
          <LoginButton />
          <SignUpButton />
        </div>
      </div>
    </div>
  );
}
