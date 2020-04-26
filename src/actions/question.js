import {
  ANSWERED,
  NEXT_QUESTION,
  QUIZ_FAILED,
  TICK,
  QUIZ_COMPLETE
} from "./types";
import { hardnessMultipliers } from "../utils/constants";

// This action gets user's answer and checks it. If answer is wrong, ends the game.
// If correct and there's no question left, successfully ends the quiz.
// If there's still question/s left, calculate the question's score by constant multiplier and time.
export const answerQuestion = answer => (dispatch, getState) => {
  const {
    quiz: { questions, questionIndex, difficulty },
    question: { timeLeft }
  } = getState();
  const correctAnswer = questions[questionIndex].correct_answer;
  if (answer !== correctAnswer) {
    dispatch({ type: ANSWERED, payload: { answer } });
    dispatch({ type: QUIZ_FAILED });
  } else {
    const pointsToAdd = hardnessMultipliers[difficulty] * timeLeft;
    dispatch({ type: ANSWERED, payload: { answer, pointsToAdd } });
    if (questions.length === questionIndex + 1) {
      dispatch({ type: QUIZ_COMPLETE });
    }
  }
};

// This action goes to the next question and starts the time ticking action again.
export const nextQuestion = () => (dispatch, getState) => {
  dispatch({ type: NEXT_QUESTION });
  dispatch(timeTick());
};

// This action checks time remaining, question's answered state and timer's activeness.
// If correct, calls itself again after 1 second and creates a tick event to reduce.
// If time's up, ends the game.
export const timeTick = () => async (dispatch, getState) => {
  const {
    question: { timeLeft, answered, active },
    quiz: { started }
  } = getState();

  if (timeLeft > 0 && active && !answered) {
    setTimeout(() => {
      dispatch({ type: TICK });
      dispatch(timeTick());
    }, 1000);
  } else if (!answered && started) {
    dispatch({ type: QUIZ_FAILED });
  }
};
