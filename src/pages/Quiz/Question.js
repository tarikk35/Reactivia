import React from "react";
import styles from "./Quiz.module.css";
import he from "he";

const Question = ({ question, onClick }) => {
  return (
    <div className={styles.Question}>
      <h3>{he.decode(question.question)}</h3>
      {question.answers.map((answer, index) => (
        <div
          key={index}
          className={
            answer === "-"
              ? styles.Button + " " + styles.Jokered
              : styles.Button
          }
          onClick={() => onClick(answer)}
        >
          {he.decode(question.answers[index])}
        </div>
      ))}
    </div>
  );
};

export default Question;
