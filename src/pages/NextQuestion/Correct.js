import React, { Fragment } from "react";
import styles from "./NextQuestion.module.css";

// User sees this section if they answered a question correctly.
const Correct = ({ onClick, currentPoint, animComplete }) => {
  return (
    <Fragment>
      <h2>Correct !</h2>
      <h2>You have earned {currentPoint} points!</h2>
      <div
        style={{ visibility: animComplete ? "visible" : "hidden" }}
        className={styles.Button}
        onClick={onClick}
      >
        Next Question
      </div>
    </Fragment>
  );
};

export default Correct;
