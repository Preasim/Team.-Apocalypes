import style from "./Header.module.css";
import SignUpButton from "../SignUpButton/SignUpButton";
import LoginButton from "../LoginButton/LoginButton";
import Logo from "@/app/NonLogin/component/Logo/Logo";

export default function Header() {
  return (
    <header className={style.header}>
      <ul className="flex justifyBetween alignCenter mx3 heightFull">
        <li>
          <Logo />
        </li>
        <li className="flex justifyCenter alignCenter">
          <LoginButton />
          <SignUpButton />
        </li>
      </ul>
    </header>
  );
}
