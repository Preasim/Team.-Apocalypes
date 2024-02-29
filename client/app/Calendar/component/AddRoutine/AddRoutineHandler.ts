export function selectColor(
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  colorPickerState: boolean,
  setColorState: React.Dispatch<React.SetStateAction<boolean>>,
) {
  const target = event.target as HTMLElement;
  if (target.closest(".colorPicker")) {
    return;
  } else {
    setColorState(!colorPickerState);
  }
}

export function createTagHandler(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const tagForm = document.querySelector(".TagForm") as HTMLFormElement;
  const inputDom = document.querySelector(".tagInput") as HTMLInputElement;
  const createTagBox = document.createElement("div") as HTMLDivElement;
  const createTextSpan = document.createElement("span") as HTMLSpanElement;
  const innerText = inputDom.value;
  createTextSpan.innerText = innerText;
  createTagBox.classList.add("ml1");
  createTagBox.style.display = "inline-block";
  createTagBox.style.fontSize = "0.8rem";
  createTagBox.style.padding = " 0.5rem 0.8rem";
  createTagBox.style.borderRadius = "15px";
  createTagBox.style.marginBottom = "0.5rem";
  createTagBox.style.cursor = "pointer";
  createTagBox.style.color = "#fff";
  createTagBox.style.backgroundColor = "#dcbfff";
  createTagBox.appendChild(createTextSpan);
  tagForm.insertAdjacentElement("beforebegin", createTagBox);
  inputDom.value = "";
}
