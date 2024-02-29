export function modalEvent() {
  const selectContainerLength =
    document.querySelectorAll(".selectContainer ").length;

  const ColorSelectCircle = document.querySelectorAll(".colorSelectCircle")[
    selectContainerLength - 1
  ] as HTMLDivElement;
  const ExitButton = document.querySelectorAll(".ExitButton")[
    selectContainerLength - 1
  ] as HTMLButtonElement;
  console.log(selectContainerLength);

  ColorSelectCircle?.addEventListener("click", (event) =>
    colorSelectCircleHandler(event),
  );

  ExitButton?.addEventListener("click", ExitButtonClickHandler);
  closeAllModal();
}

function colorSelectCircleHandler(event: MouseEvent) {
  const target = event.target as HTMLElement;
  if (target.classList.contains("colorSelectCircle")) {
    const ColorContainer = target.childNodes[1] as HTMLDivElement;
    if (!ColorContainer.classList.contains("displayNone")) {
      ColorContainer.classList.add("displayNone");
    } else {
      ColorContainer.classList.remove("displayNone");
    }
  }
}

function ExitButtonClickHandler(event: MouseEvent) {
  const target = event.target as HTMLButtonElement;
  const targetContainer = target.closest(".container") as HTMLDivElement;
  targetContainer.classList.add("displayNone");
}

function closeAllModal() {
  const allModal = document.querySelectorAll(".container") as NodeList;
  for (let i = 0; i <= allModal.length - 2; i++) {
    const target = allModal[i] as HTMLDivElement;
    target.classList.add("displayNone");
  }
}
