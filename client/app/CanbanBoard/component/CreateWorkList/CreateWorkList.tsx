import React from 'react';
import style from '../WorkCard/WorkCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faLink, faList } from '@fortawesome/free-solid-svg-icons';

type propsType {
  dataList : {
    cardTitle : string,
    
  }
}

export default function CreateWorkList() {
  return (
    <>
    {Array.from({ length: 5 }).map((_, index) => (
      <div
        className={`${style.registrationWork} flex flexCol justifyBetween dragDom`}
        draggable="true"
        key={index}
      >
        <p className="mb1">사용자 정의 요구 사항 정의서</p>
        <div className="flex widthFull justifyBetween alignCenter">
          <div className={`IconBox`}>
            <button>
              <FontAwesomeIcon icon={faList} />
            </button>
            <button>
              <FontAwesomeIcon icon={faLink} />
            </button>
            <button>
              <FontAwesomeIcon icon={faImage} />
            </button>
          </div>
          <div className={`${style.DayTextBox}`}>
            <span>3일 후</span>
          </div>
        </div>
      </div>
    ))}
    </>
  )
}
