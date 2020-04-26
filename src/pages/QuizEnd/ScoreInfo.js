import React from "react";
import styles from "./QuizEnd.module.css";
import { gradeColor, gradeMessage } from "../../utils/constants";
import { useHistory } from "react-router-dom";
import Button from "../../components/ui/buttons/Button";

const ScoreInfo = ({ grade, totalPoints, onClick }) => {
  const history = useHistory();
  return (
    <div className={styles.ScoreInfos}>
      <div
        style={{ backgroundColor: gradeColor[grade] }}
        className={styles.ScoreMark}
      >
        <h1>{grade}</h1>
      </div>
      <h2>{gradeMessage[grade]}</h2>
      <h4>Your Score: {totalPoints}</h4>
      <Button
        className={styles.Btn}
        text="Exit"
        onClick={() => onClick({ history })}
      />
      <Button
        className={styles.Btn}
        text="Play Again"
        onClick={() => onClick({ history })}
      />
    </div>
  );
};

export default ScoreInfo;
