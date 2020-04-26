import React from "react";
import styles from "./TopBar.module.css";

const TopBar = ({
  questionIndex,
  questionsLength,
  totalPoints,
  timeLeft,
  hasHint,
  joker
}) => {
  return (
    <div className={styles.TopBar}>
      <h4>
        Question {questionIndex + 1}/{questionsLength}
      </h4>
      <h4>Points : {totalPoints}</h4>
      {joker && (
        <div
          className={styles.LightBulbWrapper}
          onClick={hasHint ? joker : null}
        >
          <div
            className={
              hasHint
                ? styles.LightBulb
                : styles.LightBulb + " " + styles.Closed
            }
          />
        </div>
      )}
      {timeLeft && <h4>Remaining:{timeLeft}</h4>}
    </div>
  );
};

export default TopBar;
