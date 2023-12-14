export function removeDetailDom(
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
) {
  const target = event.target as HTMLElement;
  const closetParent = target.closest(".detailContainer");
  closetParent?.remove();
}

export function removeWorkDom(
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
) {
  const target = event.target as HTMLButtonElement;
  const findRemoveDom = target.closest(".detailDom");
  findRemoveDom?.remove();
}

export function showAndHideDetail() {
  const detailDom = document.querySelector(".detailDom");
  if (detailDom && detailDom.classList.contains("displayNone")) {
    detailDom.classList.remove("displayNone");
  } else {
    detailDom?.classList.add("displayNone");
  }
}
