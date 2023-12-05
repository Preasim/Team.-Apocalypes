// 취침 , 아침 , 회사 , 자유시간
function setting() {
  const chartData = [35, 15, 25, 15, 10];
  const svgColor = ["#4A148C", "#D0A2F7", "#DCBFFF", "#E5D4FF", "#F1EAFF"];
  const radius = 190;
  const formula = 2 * Math.PI * radius;
  let rotateDeg = 0;
  chartData.forEach((el, i) => {
    let idx = i + 1;
    const selectCircle = document.querySelector(`.circle${idx}`) as HTMLElement;
    selectCircle.setAttribute("stroke", svgColor[idx - 1]);
    selectCircle.setAttribute(
      "stroke-dashoffset",
      `${formula - formula * (el / 100)}`,
    );
    selectCircle.setAttribute("stroke-dasharray", `${formula}`);
    if (i !== 0) rotateDeg += chartData[i - 1];
    selectCircle.style.transform = `rotate(${3.6 * rotateDeg}deg)`;
  });
  const blindWhiteCircle = document.querySelector(".blindCircle");
  blindWhiteCircle?.classList.add("ReverseAni");
}

export function init() {
  setting();
}
