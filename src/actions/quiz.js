import {
  GET_CATEGORIES,
  GET_FAILED,
  GET_QUESTIONS,
  JOKER,
  PICK_CATEGORY,
  PICK_DIFFICULTY,
  QUIZ_LOADING,
  RESTART
} from "./types";

import { getCategories as gc, getQuestions as gq } from "../api/api";

import shuffle from "../utils/shuffle"; // Shuffles array. Useful for shuffling answers.

// This action changes loading state. Used before calling API.
export const quizLoading = () => dispatch => {
  dispatch({ type: QUIZ_LOADING });
};

// Gets categories from the API.
export const getCategories = () => async (dispatch, getState) => {
  try {
    dispatch(quizLoading());
    const response = await gc();
    dispatch({ type: GET_CATEGORIES, payload: response });
  } catch (error) {
    // Redirect?
  }
};

// ?
export const getNewSession = () => async (dispatch, getState) => {};

// This action gets questions based on category,difficulty and amount of questions.
// And then rearranges the response to fit our requirements and shuffles the answers to randomize.
export const getQuestions = () => async (dispatch, getState) => {
  try {
    dispatch(quizLoading());
    const {
      quiz: { selectedCategory, difficulty }
    } = getState();
    const response = await gq({
      category: selectedCategory,
      amount: 10,
      difficulty: difficulty
    });

    const mixedResponse = response.map(item => {
      const { question, correct_answer, incorrect_answers } = item;
      const a = [...incorrect_answers, correct_answer];
      const answers = shuffle(a);
      return { question, correct_answer, answers };
    });
    dispatch({ type: GET_QUESTIONS, payload: mixedResponse });
  } catch (error) {
    dispatch({ type: GET_FAILED, payload: error });
  }
};

// This action sets hardness level.
export const setHardness = hardness => async (dispatch, getState) => {
  dispatch({ type: PICK_DIFFICULTY, payload: hardness });
};

// This action sets category.
export const setCategory = categoryId => async (dispatch, getState) => {
  dispatch({ type: PICK_CATEGORY, payload: categoryId });
};

// This action gets current question's answers and randomly picks one wrong answer from there.
// Then eliminates other two wrong answers. Use it wisely :)
export const joker = () => (dispatch, getState) => {
  const {
    quiz: { questions, questionIndex }
  } = getState();

  const { answers, correct_answer } = questions[questionIndex];
  const lastIncorrect = shuffle(
    answers.filter(i => i !== correct_answer)
  ).slice(-1)[0];
  const reducedAnswers = answers.map(answer =>
    answer === correct_answer || answer === lastIncorrect ? answer : "-"
  );

  dispatch({ type: JOKER, payload: reducedAnswers });
};

// This action restarts the game and routes back to category picking screen.
export const restartGame = ({ history }) => async (dispatch, getState) => {
  dispatch({ type: RESTART });
  history.push("/pick-category");
};
