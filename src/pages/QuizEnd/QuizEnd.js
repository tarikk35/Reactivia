import React from "react";
import styles from "./QuizEnd.module.css";
import { connect } from "react-redux";
import gradeCalculator from "../../utils/gradeCalculator";
import { restartGame } from "../../actions/quiz";
import PageWrapper from "../../components/ui/layout/PageWrapper";
import QuestionList from "./QuestionList";
import ScoreInfo from "./ScoreInfo";

const QuizEnd = ({
  quiz: { questions, totalPoints, difficulty },
  restartGame
}) => {
  const grade = gradeCalculator({
    hardness: difficulty,
    questionCount: questions.length,
    totalScore: totalPoints
  });

  return (
    <PageWrapper className={styles.Grid}>
      <QuestionList questions={questions} />
      <ScoreInfo
        onClick={restartGame}
        grade={grade}
        totalPoints={totalPoints}
      />
    </PageWrapper>
  );
};

const mapStateToProps = state => ({
  quiz: state.quiz
});

export default connect(mapStateToProps, { restartGame })(QuizEnd);
