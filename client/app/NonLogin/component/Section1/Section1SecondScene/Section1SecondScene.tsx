"use client";
import style from "../Section1.module.css";
import { useEffect } from "react";
import { init } from "../SvgController";
export default function Section1SecondScene() {
  const strokeWidth = 22;
  const radius = 190;
  const strokeDashArray = 2 * 3.14 * 190;
  const circleCx = 400;
  const circleCy = 400;
  const lineStroke = 150;
  const circleGraphText = ["수면", "아침식사", "출근", "저녁식사", "자기계발"];
  useEffect(() => {
    init();
  }, []);
  return (
    <div
      className={`alignCenter justifyCenter displayNone activeSceneFlex0 ${style.SecondSceneContainer}`}
    >
      <div
        className={`${style.SvgPosition} svgContainer ${style.SvgContainer} SecondSceneContainer`}
      >
        <svg
          viewBox="0 0 800 800"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          className={`${style.RotateCircle} relative ${style.CircleSvgPosition} SecondSceneSvg`}
        >
          <circle
            cx={circleCx}
            cy={circleCy}
            r={radius}
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={strokeDashArray}
            strokeDashoffset={strokeDashArray}
            className={`${style.CircleOrigin} circle circle1 `}
          />
          <circle
            cx={circleCx}
            cy={circleCy}
            r={radius}
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={strokeDashArray}
            strokeDashoffset={strokeDashArray}
            className={`${style.CircleOrigin} circle circle2`}
          />
          <circle
            cx={circleCx}
            cy={circleCy}
            r={radius}
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={strokeDashArray}
            strokeDashoffset={strokeDashArray}
            className={` ${style.CircleOrigin} circle circle3`}
          />
          <circle
            cx={circleCx}
            cy={circleCy}
            r={radius}
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={strokeDashArray}
            strokeDashoffset={strokeDashArray}
            className={`${style.CircleOrigin} circle circle4`}
          />
          <circle
            cx={circleCx}
            cy={circleCy}
            r={radius}
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={strokeDashArray}
            strokeDashoffset={strokeDashArray}
            className={`${style.CircleOrigin} circle circle5`}
          />
          <circle
            cx={circleCx}
            cy={circleCy}
            r={radius}
            fill="transparent"
            stroke="white"
            strokeWidth={strokeWidth + 1}
            strokeDasharray={strokeDashArray + 1}
            strokeDashoffset={0}
            className={`${style.CircleOrigin} blindCircle`}
          />
          <line
            x1={2 * 3.14 * 190 * 0.43}
            x2={2 * 3.14 * 190 * 0.44}
            y1={565}
            y2={620}
            strokeDasharray={lineStroke}
            strokeDashoffset={lineStroke}
            stroke="#4A148C"
            className="circleGraphLine CircleGraphTextAni"
          />
          <line
            x1={2 * 3.14 * 190 * 0.2}
            x2={2 * 3.14 * 190 * 0.14}
            y1={520}
            y2={600}
            strokeDasharray={lineStroke}
            strokeDashoffset={lineStroke}
            stroke="#D0A2F7"
            className="circleGraphLine CircleGraphTextAni"
          />
          <line
            x1={2 * 3.14 * 190 * 0.19}
            x2={2 * 3.14 * 190 * 0.14}
            y1={300}
            y2={270}
            strokeDasharray={lineStroke}
            strokeDashoffset={lineStroke}
            stroke="#DCBFFF"
            className="circleGraphLine CircleGraphTextAni"
          />
          <line
            x1={2 * 3.14 * 190 * 0.44}
            x2={2 * 3.14 * 190 * 0.41}
            y1={150}
            y2={220}
            strokeDasharray={lineStroke}
            strokeDashoffset={lineStroke}
            stroke="#E5D4FF"
            className="circleGraphLine CircleGraphTextAniReverse"
          />
          <line
            x1={2 * 3.14 * 190 * 0.57}
            x2={2 * 3.14 * 190 * 0.495}
            y1={300}
            y2={340}
            strokeDasharray={lineStroke}
            strokeDashoffset={lineStroke}
            stroke="#F1EAFF"
            className="circleGraphLine CircleGraphTextAniReverse"
          />
        </svg>
        {circleGraphText.map((item, index) => (
          <span
            key={index}
            className={`absolute CircleTextPosition${
              index + 1
            } spaceNoWrap fontSize1  CircleGraphTextSideFadeOnAni opacityNone `}
          >
            {item}
          </span>
        ))}
        <p
          className={`absolute spaceNoWrap ${style.graphTextStyle} fontWeight700 CircleGraphTextFadeOnAni opacityNone ${style.CircleSvgTextPosition} SecondSceneSvgText`}
        >
          하루를 계획하세요
        </p>
      </div>
      <div
        className={`flex flexCol SecondPartText  ${style.SecondTextfixed} `}
        id="messageB"
      >
        <p
          className={`fontSize2 fontWeight900 mb2 ${style.SvgRightTitleSize} SecondSceneRightTitleText`}
        >
          완벽한 루틴 실천
        </p>
        <p
          className={`${style.SecondPartTextLineHeight} fontWeight600 mainText ${style.SvgRightDescSize} SecondSceneRightDescText`}
        >
          시간 및 날짜를 지정하여 업무를 신속히 추가할 수 있습니다.
          <br />
          핸드폰 및 PC에서 설정한 알림을 통해 일정을 기억할 수 있습니다.
        </p>
      </div>
    </div>
  );
}
