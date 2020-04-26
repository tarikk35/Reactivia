import React, { useState } from "react";
import styles from "./NextQuestion.module.css";
import Wrong from "./Wrong";
import Correct from "./Correct";
import { connect } from "react-redux";
import { restartGame } from "../../actions/quiz";
import NextQuestionAnimation from "../../components/animations/NextQuestionAnimation";
import PageWrapper from "../../components/ui/layout/PageWrapper";
import TopBar from "../../components/ui/layout/TopBar";

const NextQuestion = ({
  onClick,
  restartGame,
  wrong,
  quiz: { questions, questionIndex, totalPoints },
  question: { currentPoint }
}) => {
  const [animationComplete, setAnimationComplete] = useState(false);

  return (
    <PageWrapper className={styles.NoPadding}>
      <TopBar
        questionIndex={questionIndex}
        questionsLength={questions.length}
        totalPoints={totalPoints}
      />
      <div className={styles.Content}>
        <NextQuestionAnimation wrong={wrong} callback={setAnimationComplete} />
        {wrong ? (
          <Wrong animComplete={animationComplete} onClick={restartGame} />
        ) : (
          <Correct
            animComplete={animationComplete}
            onClick={onClick}
            currentPoint={currentPoint}
          />
        )}
      </div>
    </PageWrapper>
  );
};

const mapStateToProps = state => ({
  quiz: state.quiz,
  question: state.question
});

export default connect(mapStateToProps, { restartGame })(NextQuestion);
