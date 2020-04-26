import React, { Fragment, useState } from "react";
import styles from "./Quiz.module.css";
import { useHistory } from "react-router-dom";
import NextQuestion from "../NextQuestion/NextQuestion";
import QuizEnd from "../QuizEnd/QuizEnd";
import { connect } from "react-redux";
import Loading from "../../components/ui/layout/Loading";
import { getQuestions, joker, restartGame } from "../../actions/quiz";
import { answerQuestion, nextQuestion, timeTick } from "../../actions/question";
import Reset from "../Reset/Reset";
import FlexPageWrapper from "../../components/ui/layout/FlexPageWrapper";
import BackButton from "../../components/ui/buttons/BackButton";
import TopBar from "../../components/ui/layout/TopBar";
import Question from "./Question";
import CountdownAnimation from "../../components/animations/CountdownAnimation";

const Quiz = ({
  quiz: {
    loading,
    questions,
    questionIndex,
    hasHint,
    complete,
    failed,
    totalPoints
  },
  question: { answered, timeLeft, active },
  joker,
  restartGame,
  answerQuestion,
  nextQuestion,
  timeTick
}) => {
  // Back Button should dispatch an action to clear state

  const history = useHistory();

  const [animationComplete, setAnimationComplete] = useState(false);

  if (failed) return <NextQuestion wrong onClick={() => {}} />;
  else if (complete) return <QuizEnd />;
  else if (answered) return <NextQuestion onClick={nextQuestion} />;
  else if (questions.length === 0 && !loading) {
    return <Reset />;
  } else if (loading) return <Loading />;

  const start = () => {
    setAnimationComplete(true);
    timeTick();
  };

  return (
    <FlexPageWrapper className={styles.NoCenter}>
      {animationComplete ? (
        <Fragment>
          <TopBar
            hasHint={hasHint}
            joker={joker}
            questionIndex={questionIndex}
            questionsLength={questions.length}
            timeLeft={timeLeft}
            totalPoints={totalPoints}
          />
          <BackButton onClick={() => restartGame({ history })} />
          {questions[questionIndex] && (
            <Question
              onClick={answerQuestion}
              question={questions[questionIndex]}
            />
          )}
        </Fragment>
      ) : (
        <CountdownAnimation start={start} />
      )}
    </FlexPageWrapper>
  );
};

const mapStateToProps = state => ({
  quiz: state.quiz,
  question: state.question
});

export default connect(mapStateToProps, {
  getQuestions,
  joker,
  answerQuestion,
  nextQuestion,
  restartGame,
  timeTick
})(Quiz);
