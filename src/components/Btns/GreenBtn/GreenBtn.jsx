import React from "react";

import styles from "./GreenBtn.module.css";

const GreenBtn = ({ text, onBtnClick }) => {
  return <button onClick={onBtnClick} className={styles.greenBtn}>{text}</button>;
};

export default GreenBtn;
