import React, { Fragment } from "react";
import styles from "./NextQuestion.module.css";
import { connect } from "react-redux";
import he from "he";
import { useHistory } from "react-router-dom";

// Game over section
const Wrong = ({
  onClick,
  quiz: { questions, questionIndex, answers, totalPoints },
  question: { timeLeft },
  animComplete
}) => {
  const history = useHistory();
  const question = questions[questionIndex];
  const wrongAnswer =
    (answers.length > questionIndex && answers[questionIndex][questionIndex]) ||
    null;
  const correctAnswer = question.correct_answer;
  return (
    <Fragment>
      <h2>{timeLeft === 0 ? "Time's up !" : "Wrong Answer"}</h2>
      <div className={styles.QuestionWrapper}>
        <h3>{he.decode(question.question)}</h3>
        <div className={styles.Answers}>
          {question.answers.map((answer, index) => (
            <h3
              key={index}
              className={
                wrongAnswer === answer
                  ? styles.Error
                  : correctAnswer === answer
                  ? styles.Correct
                  : null
              }
            >
              {he.decode(answer)}
            </h3>
          ))}
        </div>
      </div>
      <h2>Total : {totalPoints} points</h2>
      <div
        style={{ visibility: animComplete ? "visible" : "hidden" }}
        className={styles.Button}
        onClick={() => onClick({ history })}
      >
        Play Again
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  quiz: state.quiz,
  question: state.question
});

export default connect(mapStateToProps)(Wrong);
