import React from 'react';

import styles from "./RedBtn.module.css";

const RedBtn = ({ text, onBtnClick }) => {
  return <button onClick={onBtnClick} className={styles.redBtn}>{text}</button>
};

export default RedBtn;
