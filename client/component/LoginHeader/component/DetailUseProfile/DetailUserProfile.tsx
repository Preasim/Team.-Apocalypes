import style from "./DetailUser.module.css";
import Link from "next/link";
export default function DetailUserProfile() {
  return (
    <div
      className={`absolute ${style.DetailUseProfileStyle} ${style.DetailUserPosiion} flex flexCol justifyCenter alignCenter DetailUseProfile displayNone`}
    >
      <figure className={`widthFull ${style.imgBox} mxAuto`}>
        <img
          src="/img/profile.png"
          alt="사용자 프로필 이미지"
          className="widthFull"
        />
      </figure>
      <div className={`${style.accountBox} mb1`}>
        <p>Demuu</p>
        <p>이메일</p>
        <p>1231341234234</p>
      </div>
      <div className={`${style.accountSettingBox} mb1`}>
        <Link className=" cursorPointer" href={"#"}>
          계정 설정
        </Link>
      </div>
      <div
        className={`${style.contractBox} widthFull flex flexCol justifyCenter alignCenter`}
      >
        <p className="mainText">서비스 약관</p>
        <p className="mainText">개인정보 처리 방침</p>
        <button className="cursorPointer mainText ">로그아웃</button>
      </div>
    </div>
  );
}
