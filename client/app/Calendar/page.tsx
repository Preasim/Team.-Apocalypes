"use client";
import Header from "./component/CalendarHeader/Header";
import CalendarDay from "./component/CalendarDay/CalendarDay";
import style from "./page.module.css";

export default function page() {
  return (
    <section className={`${style.sectionSize} ${style.sectionStyle}`}>
      <Header />
      <CalendarDay />
    </section>
  );
}
