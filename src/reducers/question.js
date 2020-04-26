import {
  ANSWERED, // Question is answered
  RESTART, // Quiz needs to be restarted
  NEXT_QUESTION, // Go to the next question
  TICK, // Every timer second
  QUIZ_FAILED, // Quiz failed by wrong answer or no time left
  GET_QUESTIONS, // Get questions from API
  QUIZ_COMPLETE // Quiz successfully completed
} from "../actions/types";
import { DEFAULT_QUESTION_TIME } from "../utils/constants";

const initialState = {
  timeLeft: DEFAULT_QUESTION_TIME, // Current question's remaining time
  currentPoint: 0, // Current question's points to add to the total points
  answered: false, // Is question answered?
  active: false // Timer is ticking/should tick
};

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case TICK:
      return { ...state, timeLeft: state.timeLeft - 1 };
    case ANSWERED:
      return {
        ...state,
        answered: true,
        active: false,
        currentPoint: payload.pointsToAdd || 0
      };
    case NEXT_QUESTION:
      return {
        ...state,
        answered: false,
        active: true,
        timeLeft: DEFAULT_QUESTION_TIME
      };
    case GET_QUESTIONS:
      return { ...state, active: true };
    case RESTART:
      return {
        ...state,
        active: false,
        timeLeft: DEFAULT_QUESTION_TIME,
        currentPoint: 0,
        answered: false
      };
    case QUIZ_COMPLETE:
      return { ...state, active: false };
    case QUIZ_FAILED:
      return { ...state, active: false };
    case NEXT_QUESTION:
      return { ...state, answered: false };
    default:
      return { ...state };
  }
};
