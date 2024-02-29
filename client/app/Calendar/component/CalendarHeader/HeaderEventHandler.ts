import { Dispatch, SetStateAction } from "react";

const $ = (string: string) => document.querySelector(string);

export function HambergerMenuHandler() {
  const sliderContainer = document.querySelector(".sliderContainer");
  sliderContainer?.classList.contains("openSlider")
    ? sliderContainer?.classList.remove("openSlider")
    : sliderContainer?.classList.add("openSlider");
}

export function useProfileMenuHandler() {
  const useProfileDom = document.querySelector(".DetailUseProfile");
  useProfileDom?.classList.contains("openUserProfile")
    ? useProfileDom?.classList.remove("openUserProfile")
    : useProfileDom?.classList.add("openUserProfile");
}

function visibleNonHeader() {
  const LoginHeader = $(".LoginHeader") as HTMLElement;
  if (LoginHeader) {
    LoginHeader.style.display = "none";
    LoginHeader.remove();
  }
}

export function visibleCalendar() {
  const calendarContainer = $(".removeTriangle") as HTMLElement;

  calendarContainer.classList.contains("active")
    ? calendarContainer.classList.remove("active")
    : calendarContainer.classList.add("active");
}

export function removeCalendar(event: React.MouseEvent) {
  const target = event.target as HTMLInputElement;
  const calendarContainer = $(".removeTriangle");
  if (!target.closest("calendar") || !target.closest("datePickerPosition")) {
  } else {
    calendarContainer?.classList.remove("active");
  }
}

export function prevDay(
  setDate: Dispatch<SetStateAction<Date>>,
  currnetDate: Date,
) {
  const date = currnetDate.getDate() - 1;
  const year = currnetDate.getFullYear();
  const month = currnetDate.getMonth();
  const FullTime = new Date(year, month, date);
  setDate(FullTime);
}

export function nextDay(
  setDate: Dispatch<SetStateAction<Date>>,
  currnetDate: Date,
) {
  const date = currnetDate.getDate() + 1;
  const year = currnetDate.getFullYear();
  const month = currnetDate.getMonth();
  const FullTime = new Date(year, month, date);
  setDate(FullTime);
}

export function moveToDay(setDate: Dispatch<SetStateAction<Date>>) {
  const toDay = new Date();
  setDate(toDay);
}

export function HambergerHandler() {
  const input = $("#hambergerCalendar") as HTMLInputElement;
  const sliderContainer = $(".sliderContainer") as HTMLDivElement;
  if (input.checked) {
    sliderContainer.classList.add("openSlider");
  } else {
    sliderContainer.classList.remove("openSlider");
  }
}

export function UserProfileHandler() {
  const userProfile = $(".DetailUseProfile") as HTMLElement;
  if (userProfile.classList.contains("openUserProfile")) {
    userProfile.classList.remove("openUserProfile");
  } else {
    userProfile.classList.add("openUserProfile");
  }
}

export function SelectCalendarHandler(event: React.MouseEvent) {
  const removeTriangle = $(".removeTriangle");
  const target = event.target as HTMLElement;
  if (!target.closest(".teamContainer")) {
    if (removeTriangle?.classList.contains("active")) {
      removeTriangle.classList.add("active");
    } else {
      removeTriangle?.classList.remove("active");
    }
  } else {
    removeTriangle?.classList.add("active");
  }
}

export function ToggleCalendarBoxVisible() {
  const checkBoxDom = $(".checkBoxContainer");
  checkBoxDom?.classList.contains("show")
    ? checkBoxDom.classList.remove("show")
    : checkBoxDom?.classList.add("show");
}

export function returnCurrentTime() {
  const days = ["월", "화", "수", "목", "금", "토", "일"];
  let now = new Date();

  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const day = now.getDay();
  let FullYear = "";
  let FullMonth = "";
  let FullDate = "";
  let FullDay = "";
  FullYear += year + "년";
  FullMonth += month + "월";
  FullDate += date + "일";
  if (day !== 0) {
    FullDay += days[day - 1];
  } else {
    FullDay += days[6];
  }

  return {
    FullYear,
    FullMonth,
    FullDate,
    FullDay,
  };
}

export function init() {
  visibleNonHeader();
}
