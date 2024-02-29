const $ = (selector: string) => document.querySelector(selector);
export function colorPickerHandler(color: any) {
  const colorPickerContainer = $(".colorPickerContainer") as HTMLDivElement;
  if (colorPickerContainer) {
    colorPickerContainer.style.backgroundColor = color.hex;
  }
}
