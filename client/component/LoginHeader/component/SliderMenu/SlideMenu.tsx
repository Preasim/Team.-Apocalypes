import Link from "next/link";
import style from "./SliderMenu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
export default function SlideMenu() {
  return (
    <div className={`${style.sliderContainer} sliderContainer displayNone`}>
      <div
        className={`${style.containerTopStyle}  flex justifyCenter alignCenter`}
      >
        <ul className={`flex flexCol justifyBetween widthFull heightFull`}>
          <li className={`flex ${style.LinkList}`}>
            <Link href="/">
              <FontAwesomeIcon icon={faClock} className="mr1" />
              하루 루틴
            </Link>
          </li>
          <li className={`flex ${style.LinkList}`}>
            <Link href="/Kanbanbodeu">
              <FontAwesomeIcon icon={faClipboardList} className="mr1" />
              칸반 보드
            </Link>
          </li>
          <li className={`flex ${style.LinkList}`}>
            <Link href="#">
              <FontAwesomeIcon icon={faCalendar} className="mr1" />
              캘린더
            </Link>
          </li>
        </ul>
      </div>
      <div
        className={`flex flexCol justifyBetween widthFull ${style.containerBottomStyle}`}
      >
        <Link href="#">
          태그 설정
          <FontAwesomeIcon icon={faPlus} className="ml1" />
        </Link>
      </div>
    </div>
  );
}
