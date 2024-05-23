import React from "react";

import EditEnvelopeForm from "./EditEnvelopeForm/EditEnvelopeForm";
import WhiteBtn from "../Btns/WhiteBtn/WhiteBtn";

import styles from "./EditEnvelopesForm.module.css";

const EditEnvelopesForm = ({ onCloseBtnClick }) => {
  return (
    <div>
      <div className={styles.backgroundHider}>
      </div >
      <div className={styles.editEnvelopeForm}>
        <div className={styles.sectionHeader}>
          <h1>Envelopes</h1>
          <div className={styles.btnContainer}>
            <WhiteBtn text="create envelope" />
            <WhiteBtn onBtnClick={onCloseBtnClick} text="close" />
          </div>
        </div>
        <div className={styles.envelopesContainer}>
          <EditEnvelopeForm />
          <EditEnvelopeForm />
          <EditEnvelopeForm />
          <EditEnvelopeForm />
          <EditEnvelopeForm />
          <EditEnvelopeForm />
        </div>
      </div>
    </div>
  );
};

export default EditEnvelopesForm;
