import { Dispatch, SetStateAction } from "react";

let y = 0;
let WorkCardContainer: HTMLElement | null = null;
let AddWorkDom: HTMLElement | null = null;
let prevSiblingHeight = 0;
let clickState = true;

export function AddWorkClickHandler(event: any) {
  const target = event.target as HTMLElement;
  const AddWorkContainer = target.previousElementSibling as HTMLElement;
  const AddWorkContainerHeight = Number(
    AddWorkContainer.style.height.replace("rem", ""),
  );
  if (AddWorkContainerHeight >= 100) return;
  if (AddWorkContainer && AddWorkContainerHeight > 0) {
    AddWorkContainer.style.height = `0px`;
  } else {
    if (window.innerWidth <= 1024) {
      AddWorkContainer.style.height = `80%`;
    } else {
      AddWorkContainer.style.height = `30rem`;
    }
  }
}
export function WorkCardSLideMouseSlideHandler(event: any) {
  if (AddWorkDom) {
    const AddWorkDomHeight = Number(AddWorkDom.style.height.replace("px", ""));
    const dy = y - event.clientY;

    const mouseStatus = dy > AddWorkDomHeight ? "up" : "down";
    console.log(mouseStatus);
    if (AddWorkDomHeight < 0 && mouseStatus === "down") clearSlideEvent();
    if (AddWorkDomHeight >= 500 && mouseStatus === "up") clearSlideEvent();
    if (WorkCardContainer && AddWorkDom) {
      if (event.clientY - y) {
        AddWorkDom.style.height = `${dy}px`;
      }
    }
  }
}

function clearSlideEvent() {
  document.removeEventListener("mousemove", WorkCardSLideMouseSlideHandler);
  document.removeEventListener("mouseup", WorkCardSlideMouseUpHandler);
}

export function WorkCardSlideMouseUpHandler() {
  if (AddWorkDom) {
    AddWorkDom.style.transition = `all 0.5s`;
    const AddWorkDomHeight = Number(AddWorkDom.style.height.replace("px", ""));
    if (AddWorkDomHeight <= 10) {
      AddWorkDom.style.height = "0px";
    }
  }
  clearSlideEvent();
}

export function WorkCardSlideMouseDownHandler(
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
) {
  const target = event.target as HTMLElement;
  AddWorkDom = target.parentElement;
  if (clickState) {
    y = event.clientY;
    clickState = false;
  }
  if (AddWorkDom) AddWorkDom.style.transition = `0s`;
  if (AddWorkDom) {
    prevSiblingHeight = AddWorkDom.getBoundingClientRect().height;
    document.addEventListener("mousemove", WorkCardSLideMouseSlideHandler);
    document.addEventListener("mouseup", WorkCardSlideMouseUpHandler);
  }
}

export function imgInput(
  event: React.ChangeEvent<HTMLInputElement>,
  setImgName: Dispatch<SetStateAction<string>>,
) {
  if (event.target.files) {
    setImgName(event.target.files[0].name);
  }
}

export function cancelAddWork(event: React.MouseEvent) {
  const target = event.target as HTMLElement;
  AddWorkDom = target.closest(".addWorkPageStyle");
  if (AddWorkDom) {
    AddWorkDom.style.height = "0%";
  }
}

export function dragHandler() {
  const $ = (select: string) => document.querySelectorAll(select);
  const draggables = $(".dragDom");
  const containers = $(".WorkCard");
  const appendCotainer = $(".workCardBody");

  draggables.forEach((el) => {
    el.addEventListener("dragstart", () => {
      el.classList.add("dragging");
    });

    el.addEventListener("dragend", () => {
      el.classList.remove("dragging");
    });
  });

  function getDragAfterElement(container: any, y: number) {
    const draggableElements = [
      ...container.querySelectorAll(".dragDom:not(.dragging)"),
    ];

    return draggableElements.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect(); //해당 엘리먼트에 top값, height값 담겨져 있는 메소드를 호출해 box변수에 할당
        const offset = y - box.top - box.height / 2; //수직 좌표 - top값 - height값 / 2의 연산을 통해서 offset변수에 할당
        if (offset < 0 && offset > closest.offset) {
          // (예외 처리) 0 이하 와, 음의 무한대 사이에 조건
          return { offset: offset, element: child }; // Element를 리턴
        } else {
          return closest;
        }
      },
      { offset: Number.NEGATIVE_INFINITY },
    ).element;
  }

  containers.forEach((container, index) => {
    container.addEventListener("dragover", (e: any) => {
      e.preventDefault();
      const afterElement = getDragAfterElement(container, e.clientY);
      const draggable = document.querySelector(".dragging");
      if (appendCotainer && draggable) {
        appendCotainer[index].appendChild(draggable);
        appendCotainer[index].insertBefore(draggable, afterElement);
      }
    });

    container.addEventListener("drop", (e: any) => {
      e.preventDefault();
      const afterElement = getDragAfterElement(container, e.clientY);
      const draggable = document.querySelector(".dragging");
      if (appendCotainer && draggable) {
        appendCotainer[index].appendChild(draggable);
        appendCotainer[index].insertBefore(draggable, afterElement);
      }
    });
  });
}

export function init() {
  WorkCardContainer = document.querySelector(".WorkCard");
  dragHandler();
}
