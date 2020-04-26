import React from "react";
import styles from "./QuizEnd.module.css";
import he from "he";

const QuestionList = ({ questions }) => {
  return (
    <div className={styles.QuestionList}>
      <h1>Question List</h1>
      {questions.map((question, index) => (
        <div key={index} className={styles.QuestionSummary}>
          <p>{he.decode(question.question)}</p>
          <img alt="" src={require("../../assets/images/tick.png")} />
        </div>
      ))}
    </div>
  );
};

export default QuestionList;
