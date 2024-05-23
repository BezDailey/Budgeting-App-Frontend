import React, { useState } from "react";
import EditEnvelopeForm from "../../components/EditEnvelopesForm/EditEnvelopesForm";
import GreenBtn from "../../components/Btns/GreenBtn/GreenBtn";
import styles from "./Budget.module.css";

const Budget = ({ }) => {
  const [showEditEnvelopesForm, setShowEditEnvelopesForm] = useState(false);

  const handleEnvelopeEditBtnClick = () => {
    setShowEditEnvelopesForm(true);
  };

  const handleEnvelopeEditCloseBtnClick = () => {
    setShowEditEnvelopesForm(false);
  };

  return (
    <main>
      {showEditEnvelopesForm && <EditEnvelopeForm onCloseBtnClick={handleEnvelopeEditCloseBtnClick} />}
      <div className={styles.section}>
        <div className={styles.sectionHeaderContainer}>
          <h1 className={styles.sectionHeader}>Envelopes</h1>
          <GreenBtn onBtnClick={handleEnvelopeEditBtnClick} text="edit" />
        </div>
        <div className={styles.envelopes}>
          <div className={styles.envelope}>
            <h2>Needs</h2>
            <p>$100 out of $250 spent</p>
          </div>
          <div className={styles.envelope}>
            <h2>Wants</h2>
            <p>$100 out of $250 spent</p>
          </div>
          <div className={styles.envelope}>
            <h2>Savings</h2>
            <p>$100 out of $250 spent</p>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionHeaderContainer}>
          <h1 className={styles.sectionHeader}>Transactions</h1>
          <div className={styles.btnContainer}>
            <GreenBtn text="add transaction" />
            <GreenBtn text="edit" />
          </div>
        </div>
        <div className={styles.transactions}>
          <div className={styles.transaction}>
            <div className={styles.transactionLeft}>
              <h2>Gas Station</h2>
              <p>Needs</p>
            </div>
            <div className={styles.transactionRight}>
              <h2>-$20.00</h2>
              <p>Mar. 4th</p>
            </div>
          </div>
          <div className={styles.transaction}>
            <div className={styles.transactionLeft}>
              <h2>Gas Station</h2>
              <p>Needs</p>
            </div>
            <div className={styles.transactionRight}>
              <h2>-$20.00</h2>
              <p>Mar. 4th</p>
            </div>
          </div>
          <div className={styles.transaction}>
            <div className={styles.transactionLeft}>
              <h2>Gas Station</h2>
              <p>Needs</p>
            </div>
            <div className={styles.transactionRight}>
              <h2>-$20.00</h2>
              <p>Mar. 4th</p>
            </div>
          </div>
          <div className={styles.transaction}>
            <div className={styles.transactionLeft}>
              <h2>Gas Station</h2>
              <p>Needs</p>
            </div>
            <div className={styles.transactionRight}>
              <h2>-$20.00</h2>
              <p>Mar. 4th</p>
            </div>
          </div>
          <div className={styles.transaction}>
            <div className={styles.transactionLeft}>
              <h2>Gas Station</h2>
              <p>Needs</p>
            </div>
            <div className={styles.transactionRight}>
              <h2>-$20.00</h2>
              <p>Mar. 4th</p>
            </div>
          </div>
          <div className={styles.transaction}>
            <div className={styles.transactionLeft}>
              <h2>Gas Station</h2>
              <p>Needs</p>
            </div>
            <div className={styles.transactionRight}>
              <h2>-$20.00</h2>
              <p>Mar. 4th</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Budget;
