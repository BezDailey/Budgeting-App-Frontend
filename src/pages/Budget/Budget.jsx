import React from "react";
import styles from "./Budget.module.css";

const Budget = ({ }) => {
  return (
    <main>
      <div className={styles.section}>
        <div className={styles.sectionHeaderContainer}>
          <h1 className={styles.sectionHeader}>Envelopes</h1>
          <button className={styles.greenBtn}>edit</button>
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
            <button className={styles.greenBtn}>add transaction</button>
            <button className={styles.greenBtn}>edit</button>
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
