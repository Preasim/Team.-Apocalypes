"use client";
import Section1 from "./component/Section1/Section1";
import Section2 from "./component/Section2/Section2";
import { init } from "./pageScrollEvent";
import { useEffect, useState } from "react";
export default function page() {
  const [TypingState, setTypingState] = useState(false);
  useEffect(() => {
    init(setTypingState);
  }, []);
  return (
    <article className="flex flexCol justifyCenter widthFull relative">
      <Section1 />
      <Section2 TypingState={TypingState} setTypingState={setTypingState} />
    </article>
  );
}
