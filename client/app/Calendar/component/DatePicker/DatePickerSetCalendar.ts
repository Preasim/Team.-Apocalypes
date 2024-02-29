const $ = (string: string) => document.querySelector(string);

export function getInputColor(index: number) {
  const backgroundColorPicker = $(`#ColorPicker${index}`) as HTMLInputElement;
  const content = $(`#PickerContent${index}`) as HTMLLabelElement;
  const checkBox = $(`#checkBoxBg${index}`) as HTMLLabelElement;

  if (backgroundColorPicker) {
    backgroundColorPicker.addEventListener("input", () => {
      const selectedColor = backgroundColorPicker.value;
      if (content) content.style.backgroundColor = selectedColor;
      if (checkBox) {
        checkBox.style.backgroundColor = selectedColor;
        checkBox.style.borderColor = selectedColor;
      }
    });
  }
}
