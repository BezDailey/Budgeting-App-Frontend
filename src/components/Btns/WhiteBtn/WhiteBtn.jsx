import React from "react";

import styles from "./WhiteBtn.module.css";

const WhiteBtn = ({ text, onBtnClick }) => {
  return <button onClick={onBtnClick} className={styles.whiteBtn}>{text}</button>;
};

export default WhiteBtn;
