import style from "./Section1.module.css";
import LoginButton from "@/component/LoginButton/LoginButton";
import SignUpButton from "@/component/Header/SignUpButton/SignUpButton";
export default function Section1() {
  return (
    <>
      <section
        className="scroll-section-1 relative widthFull "
        id="scroll-section-0"
      >
        <div className="flex alignCenter justifyCenter relative ">
          <figure
            className={`fixed ${style.FirstImgPosition} ${style.FigureSize}`}
            id="TetoImg1"
          >
            <img src="/TeToImg/tetoLogo4.png" alt="TeTo 이미지1" />
          </figure>
          <div
            className={`flex flexCol fixed ${style.FirstTextPosition}`}
            id="messageA"
          >
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
        <div className={`flex alignCenter justifyCenter widthFull`}>
          <figure
            className={`${style.SvgFigureSize} ${style.CircleSvgPosition} fixed opacityNone rotate`}
            id="TetoImg2"
          >
            <img src="./TeToImg/tetoCircle.svg" alt="TeTo 이미지2" />
          </figure>

          <div
            className={`flex flexCol firstPartText  ${style.SecondTextBetweenMargin} opacityNone`}
            id="messageB"
          >
            <p className="fontSize2 fontWeight900 mb2 krTitle">
              완벽한 루틴 실천
            </p>
            <p
              className={`${style.FirstPartTextLineHeight} fontWeight600 mainText`}
            >
              시간 및 날짜를 지정하여 업무를 신속히 추가할 수 있습니다.
              <br />
              핸드폰 및 PC에서 설정한 알림을 통해 일정을 기억할 수 있습니다.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
