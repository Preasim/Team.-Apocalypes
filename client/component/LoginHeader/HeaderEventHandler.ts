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
