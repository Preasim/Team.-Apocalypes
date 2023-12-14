import { Dispatch, SetStateAction } from "react";

let x = 0;
let y = 0;
let WorkCardContainer: HTMLElement | null = null;
let AddWorkDom: HTMLElement | null = null;
let prevSiblingHeight = 0;

export function AddWorkClickHandler(event: any) {
  const target = event.target as HTMLElement;
  const AddWorkContainer = target.previousElementSibling as HTMLElement;
  const AddWorkContainerHeight = Number(
    AddWorkContainer.style.height.replace("%", ""),
  );
  if (AddWorkContainerHeight >= 100) return;
  if (AddWorkContainer && AddWorkContainerHeight > 0) {
    AddWorkContainer.style.height = `0%`;
  } else {
    AddWorkContainer.style.height = `60%`;
  }
}
export function WorkCardSLideMouseSlideHandler(event: any) {
  const dy = event.clientY - y;
  const mouseStatus = dy > 0 ? "down" : "up";
  if (AddWorkDom) {
    const AddWorkDomHeight = Number(AddWorkDom.style.height.replace("%", ""));
    if (AddWorkDomHeight <= 0 && mouseStatus === "down") return;
    if (AddWorkDomHeight >= 80 && mouseStatus === "up") return;
    if (WorkCardContainer && AddWorkDom) {
      if (event.clientY - y) {
        const h =
          ((prevSiblingHeight - dy) * 100) /
          WorkCardContainer.getBoundingClientRect().height;
        AddWorkDom.style.height = `${h}%`;
      }
    }
  }
}

export function WorkCardSlideMouseUpHandler() {
  if (AddWorkDom) {
    AddWorkDom.style.transition = `all 0.5s`;
    const AddWorkDomHeight = Number(AddWorkDom.style.height.replace("%", ""));
    if (AddWorkDomHeight <= 1) {
      AddWorkDom.style.height = "0%";
    }
  }
  document.removeEventListener("mousemove", WorkCardSLideMouseSlideHandler);
  document.removeEventListener("mouseup", WorkCardSlideMouseUpHandler);
}

export function WorkCardSlideMouseDownHandler(
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
) {
  const target = event.target as HTMLElement;
  AddWorkDom = target.parentElement;
  x = event.clientX;
  y = event.clientY;
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

export function cancleAddWork(event: React.MouseEvent) {
  const target = event.target as HTMLElement;
  AddWorkDom = target.closest(".addWorkPageStyle");
  if (AddWorkDom) {
    AddWorkDom.style.height = "0%";
  }
}

export function init() {
  WorkCardContainer = document.querySelector(".WorkCard");
}
