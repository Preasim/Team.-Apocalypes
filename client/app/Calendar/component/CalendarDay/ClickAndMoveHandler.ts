import React from "react";
import { removeCalendar } from "../CalendarHeader/HeaderEventHandler";
import { createColorSelectDom } from "./CreateSettingDom";

const $ = (string: string) => document.querySelector(string);
let mouseMoveHandlerState = false;

export function clickAndMoveHandler(event: React.MouseEvent) {
  removeCalendar(event);
  const target = event.target as HTMLElement;
  if (target.closest(".timeContainer") || target.closest("#addRoutine")) return;
  const currentClickPosition = calcTopValue(event);
  if (currentClickPosition) {
    const calcValue = currentClickPosition / 44;
    const hour = setHour(calcValue);
    const minute = setMinute(calcValue);
    createSceduleDom(calcValue, currentClickPosition, target, hour, minute);
  }
}

function calcTopValue(event: React.MouseEvent) {
  const client = $(".setCalendar") as HTMLElement;
  const clientY = event.clientY;
  const top = client?.getBoundingClientRect().top;
  if (top && client) {
    const topCalc = clientY - top;
    const innerScrollTop = client.scrollTop;
    const currentClickPosition = topCalc + innerScrollTop;
    return currentClickPosition;
  }
}

export function createSceduleDom(
  calcValue: number,
  currentClickPosition: number,
  target: HTMLElement,
  hour: number,
  minute: number,
) {
  if (currentClickPosition < 44 * 24) {
    if (target.closest("#sceduleDom")) return;
    const topPosition = setPosition(calcValue);
    const sceduleContainer = document.createElement("div");
    const sceduleContainerDom = $(".schedule");
    const sceduleDom = document.createElement("div");
    const sceduleTime = document.createElement("p");

    sceduleContainer.style.position = "absolute";
    sceduleContainer.style.width = "100%";
    sceduleContainer.style.top = `${topPosition}px`;
    sceduleContainer.style.left = "0";
    sceduleContainer.id = "sceduleContainer";
    sceduleDom.style.display = "flex";
    sceduleDom.style.flexDirection = "column";
    sceduleDom.style.position = "absolute";
    sceduleDom.style.top = `0`;
    sceduleDom.style.left = "0";
    sceduleDom.style.backgroundColor = "#00B0FF";
    sceduleDom.style.width = "95%";
    sceduleDom.style.height = `${calcValue >= 23.5 ? "auto" : "44px"}`;
    sceduleDom.style.color = "#fff";
    sceduleDom.style.borderRadius = "5px";
    sceduleDom.style.boxSizing = "border-Box";
    sceduleDom.style.padding = "6px 10px";
    sceduleDom.style.cursor = "grab";
    sceduleDom.id = "sceduleDom";
    sceduleDom.style.lineHeight = "1.3";
    sceduleDom.style.fontSize = "12px";
    sceduleDom.classList.add("mainText");
    sceduleDom.style.zIndex = "10";
    sceduleDom.style.cursor = "all-scroll";
    sceduleTime.style.fontFamily = "inherit";
    sceduleTime.style.pointerEvents = "none";
    sceduleContainer.appendChild(sceduleDom);
    createColorSelectDom(sceduleDom);

    if (calcValue >= 23.5) {
      sceduleDom.style.flexDirection = "row";
      sceduleTime.style.marginLeft = "1rem";
    }
    if (hour <= 12) {
      sceduleTime.innerText = `${
        hour === 0 ? "AM 12" : hour === 12 ? `PM ${hour}` : `AM ${hour}`
      }:${minute === 0 ? "00" : minute} - ${
        hour + 1 === 12 ? `PM ${hour + 1}` : `${hour + 1}`
      }:${minute === 0 ? "00" : minute}`;
    } else if (hour > 12) {
      sceduleTime.innerText = `PM ${hour - 12 === 0 ? "12" : hour - 12}:${
        minute === 0 ? "00" : minute
      } - ${hour <= 22 ? `${hour - 11}` : `AM ${hour - 11}`}:${
        minute === 0 ? "00" : minute
      }`;
    }
    if (sceduleContainerDom) sceduleContainerDom.appendChild(sceduleContainer);
  } else return;
}

function setHour(topValue: number) {
  const MathFloor = Math.floor(topValue);
  let hour = 0;
  switch (MathFloor) {
    case 1:
      hour = 1;
      break;
    case 2:
      hour = 2;
      break;
    case 3:
      hour = 3;
      break;
    case 4:
      hour = 4;
      break;
    case 5:
      hour = 5;
      break;
    case 6:
      hour = 6;
      break;
    case 7:
      hour = 7;
      break;
    case 8:
      hour = 8;
      break;
    case 9:
      hour = 9;
      break;
    case 10:
      hour = 10;
      break;
    case 11:
      hour = 11;
      break;
    case 12:
      hour = 12;
      break;
    case 13:
      hour = 13;
      break;
    case 14:
      hour = 14;
      break;
    case 15:
      hour = 15;
      break;
    case 16:
      hour = 16;
      break;
    case 17:
      hour = 17;
      break;
    case 18:
      hour = 18;
      break;
    case 19:
      hour = 19;
      break;
    case 20:
      hour = 20;
      break;
    case 21:
      hour = 21;
      break;
    case 22:
      hour = 22;
      break;
    case 23:
      hour = 23;
      break;
  }
  return hour;
}

function setMinute(topValue: number) {
  let minute = 0;
  const mathFloor = Math.floor(topValue);
  const decimal = topValue - mathFloor;
  if (decimal <= 0.5) minute = 0;
  else if (decimal > 0.5 && decimal <= 0.99) minute = 30;
  return minute;
}

function setPosition(topValue: number) {
  let innerPosition = 0;
  const mathFloor = Math.floor(topValue);
  const decimal = topValue - mathFloor;
  const topPosition = 44 * mathFloor;
  if (decimal <= 0.5) innerPosition = topPosition + 0;
  else if (decimal > 0.5 && decimal <= 0.99) innerPosition = topPosition + 22;
  return innerPosition;
}

export function setClickEvent(event: React.MouseEvent) {
  //dom의 위치를 구하고 적용
  const target = event.target as HTMLElement;
  const client = $(".setCalendar") as HTMLElement;
  if (
    target.classList.contains("schedule") ||
    target.closest("#addRoutine") ||
    target.classList.contains("settingContainer")
  )
    return;
  const mouseClickPosition = event.clientY;
  const sceduleDomTopValue = Number(target.style.top.replace("px", ""));
  sceduleDomClickHandler(
    target,
    mouseClickPosition,
    sceduleDomTopValue,
    client,
  );
}

function sceduleDomClickHandler(
  target: HTMLElement,
  mouseClickPosition: number,
  sceduleDomTopValue: number,
  client: HTMLElement,
) {
  if (target.closest(".container")) return;
  mouseMoveHandlerState = true;
  target.addEventListener("mousemove", (event) =>
    sceduleDomMouseMoveHandler(
      event,
      mouseClickPosition,
      sceduleDomTopValue,
      target,
      client,
    ),
  );
}

export function sceduleDomMouseUpHandler() {
  mouseMoveHandlerState = false;
}

function sceduleDomMouseMoveHandler( //dom이 상하의 최대 지점에 도달하기전 스크롤을 이동시키는 로직
  event: MouseEvent,
  mouseClickPosition: number,
  sceduleDomTopValue: number,
  target: HTMLElement,
  client: HTMLElement,
) {
  if (mouseMoveHandlerState) {
    const mouseMoveValue = event.clientY - mouseClickPosition;
    const calcMoveValue = sceduleDomTopValue + mouseMoveValue;

    if (event.clientY <= 150) {
      let currentClientTop = 160;
      currentClientTop -= 0.001;
      target.style.top = `${calcMoveValue}px`;
      client.scrollTo(0, currentClientTop);
    } else if (event.clientY >= 880) {
      client.scrollTop += 10;
      target.style.top = `${calcMoveValue + 10}px`;
    } else {
      target.style.top = `${calcMoveValue}px`;
    }
  }
}
