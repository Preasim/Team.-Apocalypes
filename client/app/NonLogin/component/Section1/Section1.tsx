import Section1FirstScene from "./Section1FirstScene/section1FirstScene";
import Section1SecondScene from "./Section1SecondScene/Section1SecondScene";

export default function Section1() {
  return (
    <>
      <section
        className="scroll-section-1 relative widthFull "
        id="scroll-section-0"
      >
        <Section1FirstScene />
        <Section1SecondScene />
      </section>
    </>
  );
}
