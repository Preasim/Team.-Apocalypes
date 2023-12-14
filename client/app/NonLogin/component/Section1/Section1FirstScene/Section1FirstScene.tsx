import React from "react";
import style from "../Section1.module.css";
import LoginButton from "@/component/LoginButton/LoginButton";
import SignUpButton from "@/component/SignUpButton/SignUpButton";

export default function Section1FirstScene() {
  return (
    <div
      className={`widthFull fixed alignCenter justifySpace ${style.FirstImgPosition} displayNone activeSceneFlex0 FirstScene`}
    >
      <figure className={` ${style.FigureSize} FirstSceneFigure`} id="TetoImg1">
        <img src="/TeToImg/tetoLogo4.png" alt="TeTo 이미지1" />
      </figure>
      <div className={`flex flexCol relative body FirstPartText`} id="messageA">
        <div className={`flex flexCol `}>
          <p
            className={`fontWeight900 mb2 ${style.SecondPartTextTitleFontSize} FirstSceneTitle spaceNoWrap`}
          >
            하루 일정을 계획하고 공유하는 캘린더
          </p>
          <p
            className={`${style.SecondPartTextLineHeight} fontWeight600 mainText ${style.SecondPartTextDescFontSize} FirstSceneDesc spaceNoWrap`}
          >
            TETO는 개인 및 그룹의 일정을 관리하고 공유할 수 있는 강력한
            도구입니다.
            <br />
            하루를 계획하는데 소요되는 시간을 최소화하고 실행에 집중하세요.
          </p>
        </div>
        <div
          className={`flex alignCenter absolute ${style.FirstPartButtonPosition}`}
        >
          <LoginButton />
          <SignUpButton />
        </div>
      </div>
    </div>
  );
}
