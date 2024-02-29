import React from "react";
import style from "./UserProfile.module.css";
import BackgroundStyle from "../../page.module.css";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function UserProfile() {
  return (
    <article className={`${BackgroundStyle.profileContainer} mb2`}>
      <h3>프로필 편집</h3>
      <div className={`${style.userProfile}`}>
        <figure>
          <img src="/img/profile.png" alt="유저 프로필" />
        </figure>
      </div>
      <div className={`${style.userInfo}`}>
        <div className="flex">
          <div>이름</div>
          <div>Demuu</div>
          <button className={`${style.arrowPosition}`}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        <div className="flex">
          <div>이메일</div>
          <div>preasim</div>
        </div>
        <div className="flex">
          <div>전화번호</div>
          <div>341241232</div>
          <button className={`${style.arrowPosition}`}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        <div className="flex">
          <div>UID</div>
          <div>ASDFSDF</div>
        </div>
        <div className="flex">
          <div>비밀번호</div>
          <div>********</div>
          <button className={`${style.arrowPosition}`}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </article>
  );
}
