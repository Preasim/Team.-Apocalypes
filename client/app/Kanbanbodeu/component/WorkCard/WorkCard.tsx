import style from "./WorkCard.module.css";

type propsType = {
  title: string;
};

export default function WorkCard(props: propsType) {
  return (
    <div
      className={`flex flexCol justifyBetween ${style.cardSize} ${style.cardStyle} p1 BoxSizingborderBox relative`}
    >
      <h4>{props.title}</h4>
      <div
        className={`draggable absolute ${style.addWorkPagePosition} ${style.addWorkPageSize} ${style.cursorRowResize}`}
      >
        <div>
          <input type="text" placeholder="이름" />
        </div>
        <div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <button
        className={`krTitle flex alignCenter cursorPointer fontSize1 ${style.buttonSize}`}
      >
        <span className={`mr1 krTitle ${style.halfHeight}`}>*</span>
        <span>작업 추가</span>
      </button>
    </div>
  );
}
