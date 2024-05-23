import React from "react";

import GreenBtn from "../../Btns/GreenBtn/GreenBtn";
import RedBtn from "../../Btns/RedBtn/RedBtn";

import styles from "./EditEnvelopeForm.module.css";

const EditEnvelopeForm = ({ }) => {
  return (
    <div className={styles.envelope}>
      <div className={styles.envelopeDetails}>
        <h2>Needs</h2>
        <p>$250</p>
      </div>
      <div className={styles.envelopeBtns}>
        <div className={styles.envelopeBtnsLeft}>
          <GreenBtn text="rename" />
          <GreenBtn text="adjust" />
        </div>
        <RedBtn text="delete" />
      </div>
    </div>
  );
};

export default EditEnvelopeForm;
