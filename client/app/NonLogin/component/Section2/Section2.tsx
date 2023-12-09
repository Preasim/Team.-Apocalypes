"use client";
import { Dispatch, SetStateAction, useEffect } from "react";
import style from "./Section2.module.css";
import { init } from "./TypingAnimation";

type propsType = {
  TypingState: boolean;
  setTypingState: Dispatch<SetStateAction<boolean>>;
};

export default function Section2(props: propsType) {
  useEffect(() => {
    if (props.TypingState) {
      init();
    }
  }, [props.TypingState]);
  return (
    <section id="scroll-section-1">
      <div
        className={`justifyCenter alignCenter widthFull displayNone activeSceneFlex1 ${style.FirstScenePosition}`}
      >
        {/* 영상 or gif 삽입부분 */}
        <div
          className={`absolute ${style.FirstSceneFigurePosition} ${style.ThirdSceneSize} ThirdSceneFigureContainer`}
          id="UsingTeToImg"
        >
          <figure className={`${style.ThirdSceneFigure}`}>
            <img src="#" alt="gif" width="100%" height="100%" />
          </figure>
        </div>
        <div
          className={`absolute ${style.FirstSceneTextPosition} ${style.FirstSceneTextWidth} ThirdSceneGifText`}
        >
          <div
            className={`absolute widthFull ${style.FirstSceneTextLineHeight} opacityNone ThirdSceneText`}
            id="messageC"
          >
            <p
              className={`krTitle fontSize2 fontWeight900 mb2 ${style.FirstSceneTitleTextFontSize} ThirdSceneFirstTitleText`}
            >
              업무 진행 상황 추적
            </p>
            <p
              className={`mainText fontWeight600 ${style.FirstSceneTextLineHeight} ${style.FirstSceneDescTextFontSize} ThirdSceneFirstDescText ThirdSceneSecondDescText`}
            >
              칸반보드를 이용해 완료한 작업을 표시하여 프로젝트의 진행 상황을
              체계적으로 추적할 수 있어 업무 효율성을 향상시킵니다
            </p>
          </div>
          <div
            className={`${style.FirstSceneTextLineHeight} absolute widthFull opacityNone ThirdSceneText`}
            id="messageD"
          >
            <p
              className={`fontWeight900 fontSize2 mb2 krTitle ${style.FirstSceneTitleTextFontSize} ThirdSceneFirstTitleText `}
            >
              사람들과 일정 공유
            </p>
            <p
              className={`mainText fontWeight600 ${style.FirstSceneTextLineHeight}  ${style.FirstSceneDescTextFontSize} ThirdSceneSecondDescText`}
            >
              공유 캐린더를 사용하면 파트너, 고객 등 사람들과 나와의 회의나 만남
              또는 일정을 공유 할 수 있습니다.
            </p>
          </div>
        </div>
      </div>
      <div
        className={`activeSceneBlock1 fixed ${style.lastSceneTextPosition} fontSize2 ${style.FirstSceneTextLineHeight} krTitle fontWeight900  ${style.lastSceneTextCenter} `}
      >
        <p className="opacityNone fontSize3 TypingAni" id="typingContainer">
          <span className="typing spaceNoWrap"></span>
          <span className={`cursor ${style.latSceneCursorStyle}  opacityNone`}>
            |
          </span>
        </p>
      </div>
    </section>
  );
}
