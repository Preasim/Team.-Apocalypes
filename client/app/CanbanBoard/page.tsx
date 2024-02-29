import style from "./page.module.css";
import Card from "./component/WorkCard/WorkCard";
import AddWork from "./component/AddWork/AddWork";
export default function page() {
  const CardLength = ["상태없음", "대기", "진행중", "완료"];
  return (
    <section className={`flex widthFull ${style.sectionHeightSize}`}>
      <AddWork />
      <div
        className={`flex justifySpace ${style.workCardContainer} ${style.workSectionBackground} p2 workCardContainer`}
      >
        {CardLength.map((item, index) => (
          <Card title={item} key={index} />
        ))}
      </div>
    </section>
  );
}
