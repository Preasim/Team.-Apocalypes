import style from "./Section2.module.css";
export default function Section2() {
  return (
    <section id="scroll-section-1">
      <div
        className={`justifyCenter alignCenter widthFull displayNone activeSceneFlex1 ${style.FirstScenePosition}`}
      >
        {/* 영상 or gif 삽입부분 */}
        <div
          className={`absolute ${style.FirstSceneFigurePosition}`}
          id="UsingTeToImg"
        >
          <figure>
            <img src="" alt="" width={500} height={500} />
          </figure>
        </div>
        <div
          className={`absolute ${style.FirstSceneTextPosition} ${style.FirstSceneTextWidth}`}
        >
          <div
            className={`absolute widthFull ${style.FirstSceneTextLineHeight} opacityNone`}
            id="messageC"
          >
            <p className="krTitle fontSize2 fontWeight900 mb2">
              업무 진행 상황 추적
            </p>
            <p
              className={`mainText fontWeight600 ${style.FirstSceneTextLineHeight}`}
            >
              칸반보드를 이용해 완료한 작업을 표시하여 프로젝트의 진행 상황을
              체계적으로 추적할 수 있어 업무 효율성을 향상시킵니다
            </p>
          </div>
          <div
            className={`${style.FirstSceneTextLineHeight} absolute widthFull opacityNone`}
            id="messageD"
          >
            <p className="fontWeight900 fontSize2 mb2 ">사람들과 일정 공유</p>
            <p
              className={`mainText fontWeight600 ${style.FirstSceneTextLineHeight}`}
            >
              공유 캐린더를 사용하면 파트너, 고객 등 사람들과 나와의 회의나 만남
              또는 일정을 공유 할 수 있습니다.
            </p>
          </div>
        </div>
      </div>
      <div>
        <p>더 나은 일상을 위한 첫 걸음입니다 성공을 향해 나아가세요</p>
      </div>
      <div></div>
    </section>
  );
}
