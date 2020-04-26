import React from "react";
import styles from "./Reset.module.css";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { restartGame } from "../../actions/quiz";

const Reset = ({ restartGame }) => {
  const history = useHistory();
  return (
    <div className={styles.PageWrapper}>
      <h1>It seems like your quiz is no longer available!</h1>
      <div className={styles.Button} onClick={() => restartGame({ history })}>
        Wanna play again?
      </div>
    </div>
  );
};

export default connect(null, { restartGame })(Reset);
