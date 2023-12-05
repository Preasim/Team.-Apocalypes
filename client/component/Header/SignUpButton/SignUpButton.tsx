import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./SignUpButton.module.css";
export default function SignUpButton() {
  return (
    <div className={`flex ${style.signUpBoxStyle}`}>
      <button className={`fontSize1 ${style.signUpStyle}`}>회원가입</button>
      <div className={`flex alignCenter justifyCenter ${style.arrowStyle}`}>
        <FontAwesomeIcon icon={faCaretRight} />
      </div>
    </div>
  );
}
