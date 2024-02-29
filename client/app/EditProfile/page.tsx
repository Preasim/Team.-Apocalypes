import React from "react";
import SetAlert from "./component/setAlert/SetAlert";
import UserProfile from "./component/userProfile/UserProfile";
import style from "./page.module.css";

export default function page() {
  return (
    <section
      className={`flex flexCol justifyCenter alignCenter widthFull ${style.containerStyle}`}
    >
      <UserProfile />
      <SetAlert />
    </section>
  );
}
