import React from "react";
import BackgroundStyle from "../../page.module.css";
import style from "./SetAlert.module.css";
export default function SetAlert() {
  return (
    <article className={`${BackgroundStyle.profileContainer}`}>
      <h3 className={`${style.alarmTitle}`}>알람 설정</h3>
      <div className={`${style.alaramContainer}`}>
        <div>
          <div>루틴</div>
          <label className={`${style.switch}`}>
            <input type="checkBox" />
            <span className={`${style.slider} ${style.round} `}></span>
          </label>
        </div>
        <div>
          <div>칸반보드</div>
          <div className="flex">
            <div className="flex">
              <span className={`${style.selectText}`}>작업 만료</span>
              <select>
                <option value="1ago">1일전</option>
                <option value="2ago">2일전</option>
                <option value="3ago">3일전</option>
              </select>
            </div>
            <label className={`${style.switch}`}>
              <input type="checkBox" />
              <span className={`${style.slider} ${style.round} `}></span>
            </label>
          </div>
        </div>
        <div>
          <div>캘린더 </div>
          <div className="flex">
            <div className="flex alignCenter mr2">
              <span className="mr1">하루 일정</span>
              <label className={`${style.switch}`}>
                <input type="checkBox" />
                <span className={`${style.slider} ${style.round} `}></span>
              </label>
            </div>
            <div className="flex alignCenter mr2">
              <span className="mr1">단일 일정</span>
              <label className={`${style.switch}`}>
                <input type="checkBox" />
                <span className={`${style.slider} ${style.round} `}></span>
              </label>
            </div>
            <div className="flex alignCenter">
              <span className="mr1">공유 캘린더 초대</span>
              <label className={`${style.switch}`}>
                <input type="checkBox" />
                <span className={`${style.slider} ${style.round} `}></span>
              </label>
            </div>
          </div>
        </div>
        <div>
          <div className="flex">
            <span className="mr1">이메일</span>
            <label className={`${style.switch}`}>
              <input type="checkBox" />
              <span className={`${style.slider} ${style.round} `}></span>
            </label>
          </div>
          <div className="flex">
            <span className="mr1">문자</span>
            <label className={`${style.switch}`}>
              <input type="checkBox" />
              <span className={`${style.slider} ${style.round} `}></span>
            </label>
          </div>
        </div>
      </div>
    </article>
  );
}
