const content = [
  "더 나은 일상을 위한 첫 걸음입니다 \n 성공을 향해 나아가세요",
  "목표를 향해 달려가는 여정을 기대하세요 \n  더 나은 일상이 여러분을 기다립니다.",
];

let lastScene: HTMLElement | null = null;
let i = 0;
let currentPrintWord = 0;

async function removeTypingAni() {
  if (lastScene !== null) {
    const currentContent = content[currentPrintWord];
    for (let index = i - 1; index >= 0; index--) {
      await new Promise((resolve) => setTimeout(resolve, 70));
      let txt = currentContent.slice(0, index);
      lastScene.innerText = txt;
      if (index <= 0) {
        if (currentPrintWord === 0) {
          currentPrintWord = 1;
        } else {
          currentPrintWord = 0;
        }
        setTimeout(() => {
          i = 0;
          interver();
        }, 80);
      }
    }
  }
}

function typingAni(interverTime: NodeJS.Timeout) {
  if (lastScene !== null) {
    let txt = content[currentPrintWord][i++];
    lastScene.innerHTML += txt === "\n" ? "<br/>" : txt;

    if (i >= content[currentPrintWord].length) {
      clearInterval(interverTime);
      setTimeout(() => {
        removeTypingAni();
      }, 2000);
    }
  }
}

function interver() {
  if (lastScene !== null) {
    const interverTime = setInterval(() => {
      typingAni(interverTime);
    }, 80);
  }
}

export function init() {
  lastScene = document.querySelector("#typingContainer .typing");
  const cursor = document.querySelector(".cursor");
  cursor?.classList.add("latSceneCursorAni");
  interver();
}
