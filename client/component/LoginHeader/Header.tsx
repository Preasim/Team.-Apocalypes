"use client";
import Logo from "@/app/NonLogin/component/Logo/Logo";
import style from "./Header.module.css";
import {
  HambergerMenuHandler,
  useProfileMenuHandler,
} from "./HeaderEventHandler";
import SlideMenu from "./component/SliderMenu/SlideMenu";
import DetailUserProfile from "./component/DetailUseProfile/DetailUserProfile";
export default function LoginHeader() {
  return (
    <header className={`${style.LoginHeader} widthFull`}>
      <ul className={`flex justifyBetween alignCenter mx3 heightFull`}>
        <li className="heightFull">
          <div className="flex justifyCenter alignCenter heightFull ">
            <div className={`${style.labelContainer} mr2 `}>
              <input type="checkBox" className="displayNone" id="hamberger" />
              <label
                htmlFor={`hamberger`}
                className={`${style.labelStyle} cursorPointer hambergerMenu `}
                onClick={HambergerMenuHandler}
              />
              <span className={`${style.hambergerMenuBar} hamberger`} />
              <span className={`${style.hambergerMenuBar} hamberger`} />
              <span className={`${style.hambergerMenuBar} hamberger`} />
              <SlideMenu />
            </div>
            <div>
              <Logo />
            </div>
          </div>
        </li>
        <li className="flex alignCenter heightFull relative">
          <figure
            className={`${style.figureSize} ${style.figureStyle} cursorPointer`}
          >
            <img
              className="heightFull"
              src="/img/profile.png"
              alt="프로필 이미지"
              onClick={useProfileMenuHandler}
            />
          </figure>
          <DetailUserProfile />
        </li>
      </ul>
    </header>
  );
}
