import Image from "next/image";
import Link from "next/link";
import style from "./Logo.module.css";
export default function Logo() {
  return (
    <div>
      <div className={`flex alignCenter justifyCenter `}>
        <Link href={"/"} className="flex alignCenter">
          <Image
            src={"/TeToImg/tetoLogo1.png"}
            alt="Teto로고 이미지"
            width={50}
            height={50}
          />
          <span className="ml1 fontSize2 fontWeight500">
            TET
            <span className={style.TetoLastTextStyle}>O</span>
          </span>
        </Link>
      </div>
    </div>
  );
}
