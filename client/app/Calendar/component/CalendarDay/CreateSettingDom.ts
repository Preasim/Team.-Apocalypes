import { returnCurrentTime } from "../CalendarHeader/HeaderEventHandler";
import { modalEvent } from "./CreateSettingDomHandler";

export function createColorSelectDom(innerDom: Element | null) {
  const { FullYear, FullMonth, FullDate, FullDay } = returnCurrentTime();
  const settingDom = `
  <div class="container">
  <form class="">
  <button class="ExitButton" type="button">X</button>
  <div>
    <div class="topFlexBox">
      <div class="colorSelectCircle">
        <div class="selectContainer displayNone">
          <ul class="colorUl">
            <li class="color" data-color="black">색상</li>
            <li class="color" data-color="">색상</li>
            <li class="color" data-color="">색상</li>
            <li class="color" data-color="">색상</li>
            <li class="color" data-color="">색상</li>
            <li class="color" data-color="">색상</li>
            <li class="color" data-color="">색상</li>
          </ul>
        </div>
      </div>
      <label for="colorPicker" class="colorPicker">
        <input type="text" class="colorPicker" id="colorPicker" />
      </label>
      <input type="text" placeholder="제목 추가" class="titleInput" />
    </div>
  </div>
  <div class="leftMarginBox">
    <div class="timeStyle">
      <div>
        <span>${FullYear}</span>
        <span>${FullMonth}</span>
        <span>${FullDate}</span>
        <span>${FullDay}</span>
      </div>
      <span> - </span>
      <div class="selectBox">
        <select class="timeSelect">
          <option value="AM 12:00">오전 12:00</option>
          <option value="AM 12:15">오전 12:15</option>
          <option value="AM 12:30">오전 12:30</option>
          <option value="AM 12:45">오전 12:45</option>
          <option value="AM 1:00">오전 1:00</option>
          <option value="AM 1:15">오전 1:15</option>
          <option value="AM 1:30">오전 1:30</option>
          <option value="AM 1:45">오전 1:45</option>
          <option value="AM 2:00">오전 2:00</option>
          <option value="AM 2:15">오전 2:15</option>
          <option value="AM 2:30">오전 2:30</option>
          <option value="AM 2:45">오전 2:45</option>
          <option value="AM 3:00">오전 3:00</option>
          <option value="AM 3:15">오전 3:15</option>
          <option value="AM 3:30">오전 3:30</option>
          <option value="AM 3:45">오전 3:45</option>
          <option value="AM 4:00">오전 4:00</option>
          <option value="AM 4:15">오전 4:15</option>
          <option value="AM 4:30">오전 4:30</option>
          <option value="AM 4:45">오전 4:45</option>
          <option value="AM 5:00">오전 5:00</option>
          <option value="AM 5:15">오전 5:15</option>
          <option value="AM 5:30">오전 5:30</option>
          <option value="AM 5:45">오전 5:45</option>
          <option value="AM 6:00">오전 6:00</option>
          <option value="AM 6:15">오전 6:15</option>
          <option value="AM 6:30">오전 6:30</option>
          <option value="AM 6:45">오전 6:45</option>
          <option value="AM 7:00">오전 7:00</option>
          <option value="AM 7:15">오전 7:15</option>
          <option value="AM 7:30">오전 7:30</option>
          <option value="AM 7:45">오전 7:45</option>
          <option value="AM 8:00">오전 8:00</option>
          <option value="AM 8:15">오전 8:15</option>
          <option value="AM 8:30">오전 8:30</option>
          <option value="AM 8:45">오전 8:45</option>
          <option value="AM 9:00">오전 9:00</option>
          <option value="AM 9:15">오전 9:15</option>
          <option value="AM 9:30">오전 9:30</option>
          <option value="AM 9:45">오전 9:45</option>
          <option value="AM 10:00">오전 10:00</option>
          <option value="AM 10:15">오전 10:15</option>
          <option value="AM 10:30">오전 10:30</option>
          <option value="AM 10:45">오전 10:45</option>
          <option value="AM 11:00">오전 11:00</option>
          <option value="AM 11:15">오전 11:15</option>
          <option value="AM 11:30">오전 11:30</option>
          <option value="AM 11:45">오전 11:45</option>
          <option value="PM 12:00">오후 12:00</option>
          <option value="PM 12:15">오후 12:15</option>
          <option value="PM 12:30">오후 12:30</option>
          <option value="PM 12:45">오후 12:45</option>
          <option value="PM 1:00">오후 1:00</option>
          <option value="PM 1:15">오후 1:15</option>
          <option value="PM 1:30">오후 1:30</option>
          <option value="PM 1:45">오후 1:45</option>
          <option value="PM 2:00">오후 2:00</option>
          <option value="PM 2:15">오후 2:15</option>
          <option value="PM 2:30">오후 2:30</option>
          <option value="PM 2:45">오후 2:45</option>
          <option value="PM 3:00">오후 3:00</option>
          <option value="PM 3:15">오후 3:15</option>
          <option value="PM 3:30">오후 3:30</option>
          <option value="PM 3:45">오후 3:45</option>
          <option value="PM 4:00">오후 4:00</option>
          <option value="PM 4:15">오후 4:15</option>
          <option value="PM 4:30">오후 4:30</option>
          <option value="PM 4:45">오후 4:45</option>
          <option value="PM 5:00">오후 5:00</option>
          <option value="PM 5:15">오후 5:15</option>
          <option value="PM 5:30">오후 5:30</option>
          <option value="PM 5:45">오후 5:45</option>
          <option value="PM 6:00">오후 6:00</option>
          <option value="PM 6:15">오후 6:15</option>
          <option value="PM 6:30">오후 6:30</option>
          <option value="PM 6:45">오후 6:45</option>
          <option value="PM 7:00">오후 7:00</option>
          <option value="PM 7:15">오후 7:15</option>
          <option value="PM 7:30">오후 7:30</option>
          <option value="PM 7:45">오후 7:45</option>
          <option value="PM 8:00">오후 8:00</option>
          <option value="PM 8:15">오후 8:15</option>
          <option value="PM 8:30">오후 8:30</option>
          <option value="PM 8:45">오후 8:45</option>
          <option value="PM 9:00">오후 9:00</option>
          <option value="PM 9:15">오후 9:15</option>
          <option value="PM 9:30">오후 9:30</option>
          <option value="PM 9:45">오후 9:45</option>
          <option value="PM 10:00">오후 10:00</option>
          <option value="PM 10:15">오후 10:15</option>
          <option value="PM 10:30">오후 10:30</option>
          <option value="PM 10:45">오후 10:45</option>
          <option value="PM 11:00">오후 11:00</option>
          <option value="PM 11:15">오후 11:15</option>
          <option value="PM 11:30">오후 11:30</option>
          <option value="PM 11:45">오후 11:45</option>
        </select>
        <span> ~ </span>
        <select class="timeSelect">
          <option value="AM 12:00">오전 12:00</option>
          <option value="AM 12:15">오전 12:15</option>
          <option value="AM 12:30">오전 12:30</option>
          <option value="AM 12:45">오전 12:45</option>
          <option value="AM 1:00">오전 1:00</option>
          <option value="AM 1:15">오전 1:15</option>
          <option value="AM 1:30">오전 1:30</option>
          <option value="AM 1:45">오전 1:45</option>
          <option value="AM 2:00">오전 2:00</option>
          <option value="AM 2:15">오전 2:15</option>
          <option value="AM 2:30">오전 2:30</option>
          <option value="AM 2:45">오전 2:45</option>
          <option value="AM 3:00">오전 3:00</option>
          <option value="AM 3:15">오전 3:15</option>
          <option value="AM 3:30">오전 3:30</option>
          <option value="AM 3:45">오전 3:45</option>
          <option value="AM 4:00">오전 4:00</option>
          <option value="AM 4:15">오전 4:15</option>
          <option value="AM 4:30">오전 4:30</option>
          <option value="AM 4:45">오전 4:45</option>
          <option value="AM 5:00">오전 5:00</option>
          <option value="AM 5:15">오전 5:15</option>
          <option value="AM 5:30">오전 5:30</option>
          <option value="AM 5:45">오전 5:45</option>
          <option value="AM 6:00">오전 6:00</option>
          <option value="AM 6:15">오전 6:15</option>
          <option value="AM 6:30">오전 6:30</option>
          <option value="AM 6:45">오전 6:45</option>
          <option value="AM 7:00">오전 7:00</option>
          <option value="AM 7:15">오전 7:15</option>
          <option value="AM 7:30">오전 7:30</option>
          <option value="AM 7:45">오전 7:45</option>
          <option value="AM 8:00">오전 8:00</option>
          <option value="AM 8:15">오전 8:15</option>
          <option value="AM 8:30">오전 8:30</option>
          <option value="AM 8:45">오전 8:45</option>
          <option value="AM 9:00">오전 9:00</option>
          <option value="AM 9:15">오전 9:15</option>
          <option value="AM 9:30">오전 9:30</option>
          <option value="AM 9:45">오전 9:45</option>
          <option value="AM 10:00">오전 10:00</option>
          <option value="AM 10:15">오전 10:15</option>
          <option value="AM 10:30">오전 10:30</option>
          <option value="AM 10:45">오전 10:45</option>
          <option value="AM 11:00">오전 11:00</option>
          <option value="AM 11:15">오전 11:15</option>
          <option value="AM 11:30">오전 11:30</option>
          <option value="AM 11:45">오전 11:45</option>
          <option value="PM 12:00">오후 12:00</option>
          <option value="PM 12:15">오후 12:15</option>
          <option value="PM 12:30">오후 12:30</option>
          <option value="PM 12:45">오후 12:45</option>
          <option value="PM 1:00">오후 1:00</option>
          <option value="PM 1:15">오후 1:15</option>
          <option value="PM 1:30">오후 1:30</option>
          <option value="PM 1:45">오후 1:45</option>
          <option value="PM 2:00">오후 2:00</option>
          <option value="PM 2:15">오후 2:15</option>
          <option value="PM 2:30">오후 2:30</option>
          <option value="PM 2:45">오후 2:45</option>
          <option value="PM 3:00">오후 3:00</option>
          <option value="PM 3:15">오후 3:15</option>
          <option value="PM 3:30">오후 3:30</option>
          <option value="PM 3:45">오후 3:45</option>
          <option value="PM 4:00">오후 4:00</option>
          <option value="PM 4:15">오후 4:15</option>
          <option value="PM 4:30">오후 4:30</option>
          <option value="PM 4:45">오후 4:45</option>
          <option value="PM 5:00">오후 5:00</option>
          <option value="PM 5:15">오후 5:15</option>
          <option value="PM 5:30">오후 5:30</option>
          <option value="PM 5:45">오후 5:45</option>
          <option value="PM 6:00">오후 6:00</option>
          <option value="PM 6:15">오후 6:15</option>
          <option value="PM 6:30">오후 6:30</option>
          <option value="PM 6:45">오후 6:45</option>
          <option value="PM 7:00">오후 7:00</option>
          <option value="PM 7:15">오후 7:15</option>
          <option value="PM 7:30">오후 7:30</option>
          <option value="PM 7:45">오후 7:45</option>
          <option value="PM 8:00">오후 8:00</option>
          <option value="PM 8:15">오후 8:15</option>
          <option value="PM 8:30">오후 8:30</option>
          <option value="PM 8:45">오후 8:45</option>
          <option value="PM 9:00">오후 9:00</option>
          <option value="PM 9:15">오후 9:15</option>
          <option value="PM 9:30">오후 9:30</option>
          <option value="PM 9:45">오후 9:45</option>
          <option value="PM 10:00">오후 10:00</option>
          <option value="PM 10:15">오후 10:15</option>
          <option value="PM 10:30">오후 10:30</option>
          <option value="PM 10:45">오후 10:45</option>
          <option value="PM 11:00">오후 11:00</option>
          <option value="PM 11:15">오후 11:15</option>
          <option value="PM 11:30">오후 11:30</option>
          <option value="PM 11:45">오후 11:45</option>
        </select>
      </div>
    </div>
    <div class="bottomInputContainer">
      <div>
        <input type="text" placeholder="참석자 추가" />
      </div>
      <div>
        <input type="text" placeholder="설명 추가" />
      </div>
    </div>
  </div>
  </form>
</div>
  `;
  // 실행순서를 보장하기 위한 promise
  if (innerDom?.parentElement) {
    const promiseObj = new Promise(function (res, rej) {
      try {
        innerDom.insertAdjacentHTML("afterbegin", settingDom);
        res("성공");
      } catch (err) {
        console.log(err);
        rej();
      }
    })

      .then(function () {
        modalEvent();
      })

      .catch(function (err) {
        console.log(err);
        return;
      });
  }
}
