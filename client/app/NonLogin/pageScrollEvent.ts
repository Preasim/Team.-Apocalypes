import { Dispatch, SetStateAction } from "react";
let yoffset = 0; //현재 스크롤된 높이
let prevScrollHeight = 0; // 이전 씬의 총 높이
let currentScene = 0; //현재 활성화된 씬
let current = 0;
let acc = 0.1;
let TypingOn = false;
let setTypingStateFn: Dispatch<SetStateAction<boolean>> | null = null;

type yoffsetType = number;

type sceneInfoType = {
  type: string;
  scrollHeight: number;
  heightNum: number;
  objs: {
    [key: string]: null | HTMLElement;
  };
  values: {
    [key: string]: (number | { start: number; end: number })[];
  };
}[];

//모든 필요한 dom과 계산에 필요한 값을 저장하는 변수 sceneInfo
const sceneInfo: sceneInfoType = [
  {
    type: "sticky",
    scrollHeight: 0,
    heightNum: 4,
    objs: {},
    values: {
      messageA_opacity_out: [1, 0, { start: 0.1, end: 0.19 }],
      messageA_transform_out: [0, -20, { start: 0.1, end: 0.19 }],
      img1_opacity_out: [1, 0, { start: 0.1, end: 0.19 }],
      img1_transform_out: [0, -20, { start: 0.1, end: 0.19 }],

      messageB_opacity_in: [0, 1, { start: 0.45, end: 0.55 }],
      messageB_opacity_out: [1, 0, { start: 0.65, end: 0.75 }],
      messageB_transform_in: [20, 0, { start: 0.21, end: 0.31 }],
      messageB_transform_out: [0, -20, { start: 0.65, end: 0.75 }],
      messageB_transformRight: [0, 60, { start: 0.45, end: 0.55 }],

      svgContainer_transform_in: [20, 0, { start: 0.3, end: 0.4 }],
      svgContainer_transform_out: [0, -20, { start: 0.65, end: 0.85 }],
      svgContainer_left_moveLeft: [50, 28, { start: 0.45, end: 0.55 }],
      svgContainer_opacity_in: [0, 1, { start: 0.3, end: 0.4 }],
      svgContainer_opacity_out: [1, 0, { start: 0.65, end: 0.85 }],
    },
  },
  {
    type: "sticky",
    scrollHeight: 0,
    heightNum: 6,
    objs: {},
    values: {
      img1_opacity_in: [0, 1, { start: 0.05, end: 0.15 }],
      img1_opacity_out: [1, 0, { start: 0.4, end: 0.5 }],
      img1_transform_in: [20, 0, { start: 0.1, end: 0.2 }],
      img1_transform_out: [0, -20, { start: 0.4, end: 0.5 }],

      messageA_opacity_in: [0, 1, { start: 0.1, end: 0.2 }],
      messageA_opacity_out: [1, 0, { start: 0.2, end: 0.3 }],
      messageA_transform_in: [20, 0, { start: 0.1, end: 0.2 }],
      messageA_transform_out: [0, -20, { start: 0.2, end: 0.3 }],

      messageB_opacity_in: [0, 1, { start: 0.3, end: 0.4 }],
      messageB_opacity_out: [1, 0, { start: 0.4, end: 0.5 }],
      messageB_transform_in: [20, 0, { start: 0.3, end: 0.4 }],
      messageB_transform_out: [0, -20, { start: 0.4, end: 0.5 }],

      TypingContainer_transform_in: [20, 0, { start: 0.6, end: 0.7 }],
      TypingContainer_opacity_in: [0, 1, { start: 0.6, end: 0.7 }],
      cursor_transform_in: [20, 0, { start: 0.6, end: 0.7 }],
      cursor_opacity_in: [0, 1, { start: 0.6, end: 0.7 }],
    },
  },
];

function setSceneObj() {
  //첫번째 섹션 처음 이미지 및 텍스트
  sceneInfo[0].objs.messageA = document.querySelector("#messageA");
  sceneInfo[0].objs.messageB = document.querySelector("#messageB");
  sceneInfo[0].objs.img1 = document.querySelector("#TetoImg1");
  sceneInfo[0].objs.svgContainer = document.querySelector(".svgContainer");
  sceneInfo[1].objs.img1 = document.querySelector("#UsingTeToImg");
  sceneInfo[1].objs.messageA = document.querySelector("#messageC");
  sceneInfo[1].objs.messageB = document.querySelector("#messageD");
  sceneInfo[1].objs.TypingContainer =
    document.querySelector("#typingContainer");
  sceneInfo[1].objs.cursor = document.querySelector(".cursor");
}

// dom 로딩이후 sceneInfo의 dom을 연결해주는 함수
function setSceneInfo() {
  for (let i = 0; i < sceneInfo.length; i++) {
    const container = document.querySelector(
      `#scroll-section-${i}`,
    ) as HTMLElement;
    sceneInfo[i].objs.container = container;
  }

  setSceneObj();
}

//각 section의 높이를 계산해주는 함수
function setLayout() {
  //각 스크롤 섹션의 높이 세팅
  for (let i = 0; i < sceneInfo.length; i++) {
    if (sceneInfo[i].type === "sticky") {
      sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
    } else {
      if (sceneInfo[i].objs.container instanceof HTMLDivElement) {
        const container = sceneInfo[i].objs.container as HTMLDivElement;
        sceneInfo[i].scrollHeight = container.offsetHeight;
      }
    }
    if (sceneInfo[i].objs.container instanceof HTMLElement) {
      const container = sceneInfo[i].objs.container as HTMLDivElement;
      container.style.height = `${sceneInfo[i].scrollHeight}px`;
    }
  }

  let totalScrollHeight = 0;
  yoffset = window.scrollY;

  for (let i = 0; i < sceneInfo.length; i++) {
    totalScrollHeight += sceneInfo[i].scrollHeight;
    if (totalScrollHeight >= yoffset) {
      currentScene = i;
      break;
    }
  }
}

function Responsive() {
  if (window.innerWidth <= 540) {
    sceneInfo[0].values.svgContainer_left_moveLeft = [
      50,
      22,
      { start: 0.45, end: 0.55 },
    ];
  } else if (window.innerHeight <= 640) {
    sceneInfo[0].values.svgContainer_left_moveLeft = [
      50,
      24,
      { start: 0.45, end: 0.55 },
    ];
  }
}

function calcValues(values: any, currentYoffset: yoffsetType) {
  let rv;
  const scrollHeight = sceneInfo[currentScene].scrollHeight;
  let scrollRatio = currentYoffset / scrollHeight;
  //start와 end의 원소가 있는 배열의 적용
  if (values.length === 3) {
    const partScrollStart = values[2].start * scrollHeight;
    const partScrollEnd = values[2].end * scrollHeight;
    const partScrollHeight = partScrollEnd - partScrollStart;

    if (currentYoffset >= partScrollStart && currentYoffset <= partScrollEnd) {
      rv =
        ((currentYoffset - partScrollStart) / partScrollHeight) *
          (values[1] - values[0]) +
        values[0];
    } else if (currentYoffset < partScrollStart) {
      rv = values[0];
    } else if (currentYoffset > partScrollEnd) {
      rv = values[1];
    }
  } else {
    rv = scrollRatio * (values[1] - values[0]) + values[0];
  }
  return rv;
}

function playAnimation() {
  const currentYoffset = yoffset - prevScrollHeight;
  const values = sceneInfo[currentScene].values;
  const objs = sceneInfo[currentScene].objs;
  const scrollHeight = sceneInfo[currentScene].scrollHeight;
  const scrollRatio = currentYoffset / scrollHeight;

  if (currentYoffset < 0) return;
  switch (currentScene) {
    case 0:
      if (
        objs.messageA === null ||
        objs.img1 === null ||
        objs.img2 === null ||
        objs.messageB === null ||
        objs.svgContainer === null
      )
        return;
      if (scrollRatio <= 0.2) {
        // 처음 TeTo 이미지 및 텍스트 애니메이션
        objs.img1.style.opacity = calcValues(
          values.img1_opacity_out,
          currentYoffset,
        );

        objs.messageA.style.opacity = calcValues(
          values.messageA_opacity_out,
          currentYoffset,
        );

        objs.img1.style.transform = `translateY(${calcValues(
          values.img1_transform_out,
          currentYoffset,
        )}px) `;

        objs.messageA.style.transform = `translateY(${calcValues(
          values.messageA_transform_out,
          currentYoffset,
        )}px) `;
      }

      if (scrollRatio >= 0.35) {
        objs.svgContainer.classList.add("svgStart");
      }

      if (scrollRatio <= 0.55) {
        objs.svgContainer.style.transform = `translateY(${calcValues(
          values.svgContainer_transform_in,
          currentYoffset,
        )}px)`;

        objs.svgContainer.style.opacity = `${calcValues(
          values.svgContainer_opacity_in,
          currentYoffset,
        )}`;

        objs.svgContainer.style.left = `${calcValues(
          values.svgContainer_left_moveLeft,
          currentYoffset,
        )}%`;

        objs.messageB.style.transform = `translateX(${calcValues(
          values.messageB_transformRight,
          currentYoffset,
        )}%) translateY(80%)`;

        objs.messageB.style.opacity = `${calcValues(
          values.messageB_opacity_in,
          currentYoffset,
        )}`;
      } else {
        objs.svgContainer.style.transform = `translateY(${calcValues(
          values.svgContainer_transform_out,
          currentYoffset,
        )}px)`;

        objs.svgContainer.style.opacity = `${calcValues(
          values.svgContainer_opacity_out,
          currentYoffset,
        )}`;

        objs.messageB.style.transform = `translateX(60%) translateY(${
          80 + calcValues(values.messageB_transform_out, currentYoffset)
        }%)`;

        objs.messageB.style.opacity = `${calcValues(
          values.messageB_opacity_out,
          currentYoffset,
        )}`;
      }

      break;
    case 1:
      if (
        objs.messageA === null ||
        objs.img1 === null ||
        objs.messageB === null ||
        objs.TypingContainer === null ||
        objs.cursor === null
      )
        return;
      if (scrollRatio <= 0.2) {
        objs.img1.style.opacity = calcValues(
          values.img1_opacity_in,
          currentYoffset,
        );

        objs.img1.style.transform = `translateY(${calcValues(
          values.img1_transform_in,
          currentYoffset,
        )}px)`;

        objs.messageA.style.transform = `translateY(${calcValues(
          values.messageA_transform_in,
          currentYoffset,
        )}px)`;

        objs.messageA.style.opacity = `${calcValues(
          values.messageA_opacity_in,
          currentYoffset,
        )}`;
      } else {
        objs.img1.style.opacity = calcValues(
          values.img1_opacity_out,
          currentYoffset,
        );

        objs.img1.style.transform = `translateY(${calcValues(
          values.img1_transform_out,
          currentYoffset,
        )}px)`;

        objs.messageA.style.transform = `translateY(${calcValues(
          values.messageA_transform_out,
          currentYoffset,
        )}px)`;

        objs.messageA.style.opacity = `${calcValues(
          values.messageA_opacity_out,
          currentYoffset,
        )}`;
      }

      if (scrollRatio <= 0.4) {
        objs.messageB.style.transform = `translateY(${calcValues(
          values.messageB_transform_in,
          currentYoffset,
        )}px)`;

        objs.messageB.style.opacity = `${calcValues(
          values.messageB_opacity_in,
          currentYoffset,
        )}`;
      } else {
        objs.messageB.style.transform = `translateY${calcValues(
          values.messageB_transform_out,
          currentYoffset,
        )}px`;

        objs.messageB.style.opacity = `${calcValues(
          values.messageB_opacity_out,
          currentYoffset,
        )}`;
      }

      if (scrollRatio <= 0.7) {
        objs.TypingContainer.style.transform = `translateY(${calcValues(
          values.TypingContainer_transform_in,
          currentYoffset,
        )}px)`;

        objs.TypingContainer.style.opacity = `${calcValues(
          values.TypingContainer_opacity_in,
          currentYoffset,
        )}`;

        objs.cursor.style.transform = `translateY(${calcValues(
          values.cursor_transform_in,
          currentYoffset,
        )}px)`;

        objs.cursor.style.opacity = `${calcValues(
          values.cursor_opacity_in,
          currentYoffset,
        )}`;
      } else {
        if (!TypingOn) {
          TypingOn = true;
          if (setTypingStateFn) {
            setTypingStateFn(true);
          }
        }
      }

      break;
  }
}

function scrollLoop() {
  prevScrollHeight = 0;
  for (let i = 0; i < currentScene; i++) {
    prevScrollHeight += sceneInfo[i].scrollHeight;
  }
  if (current >= prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
    let time = setTimeout(() => {
      currentScene++;
      document.body.id = `show-scene-${currentScene}`;
      clearTimeout(time);
    }, 1);
  }
  if (current <= prevScrollHeight) {
    if (currentScene === 0) return;
    let time = setTimeout(() => {
      currentScene--;
      document.body.id = `show-scene-${currentScene}`;
      clearTimeout(time);
    }, 1);
  }
}

if (typeof window !== "undefined") {
  window.addEventListener("scroll", () => {
    yoffset = window.scrollY;
    current = current + (yoffset - current) * acc;
    scrollLoop();
    playAnimation();
  });
}

export function init(setTypingState: Dispatch<SetStateAction<boolean>>) {
  setTypingStateFn = setTypingState;
  yoffset = window.scrollY;
  current = current + (yoffset - current) * acc;
  setSceneInfo();
  setLayout();
  Responsive();
  scrollLoop();
  playAnimation();
}
