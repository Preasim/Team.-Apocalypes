import style from "./LoginButton.module.css";
export default function LoginButton() {
  return (
    <div>
      <button
        className={`mr1 fontSize1 fontWeight600 cursorPointer ${style.CursorPointer} LoginTextSize`}
      >
        로그인
      </button>
    </div>
  );
}
