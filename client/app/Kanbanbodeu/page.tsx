import style from "./page.module.css";
import Card from "./component/WorkCard/WorkCard";
export default function page() {
  return (
    <section className={`flex widthFull ${style.sectionHeightSize}`}>
      <div className={`${style.createWorkCardContainer} heightFull`}>
        <ul className={`heightFull flex flexCol  alignCenter mx2 `}>
          <li
            className={`${style.createWorkStyle} flex alignCenter fontSize2 mt3`}
          >
            <h3 className="krTitle fontWeight900">Works</h3>
            <button className={`mlAuto ${style.plusStyle}`}>+</button>
          </li>
        </ul>
      </div>
      <div
        className={`${style.workCardContainer} ${style.workSectionBackground} p2`}
      >
        <Card title="상태없음" />
      </div>
    </section>
  );
}
