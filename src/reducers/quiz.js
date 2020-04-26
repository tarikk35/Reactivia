import {
  ANSWERED,
  GET_CATEGORIES,
  GET_FAILED,
  GET_QUESTIONS,
  JOKER,
  NEXT_QUESTION,
  PICK_CATEGORY,
  PICK_DIFFICULTY,
  QUIZ_FAILED,
  QUIZ_LOADING,
  RESTART,
  QUIZ_COMPLETE
} from "../actions/types";

const initialState = {
  loading: false, // Getting things from API?
  started: false, // Quiz is started 
  categories: [], // Available categories
  questions: [], // Available questions based on category/hardness/question count
  questionIndex: 0, // Current Question's index
  selectedCategory: 0, // Selected Category
  difficulty: "medium", // Selected Difficulty
  totalPoints: 0, // Total points earned by use
  hasHint: true, // User has a hint available to use
  complete: false, // To show the completion screen
  failed: false, // To know if the user is answered incorrectly
  answers: [] // Past answers answered by user. Pointless ATM cuz wrong answers = game over
};

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case QUIZ_LOADING:
      return { ...state, loading: true };

    case GET_CATEGORIES:
      return {
        ...state,
        categories: payload,
        loading: false
      };

    case GET_QUESTIONS:
      return {
        ...state,
        questions: payload,
        questionIndex: 0,
        loading: false,
        started: true
      };

    case QUIZ_FAILED:
      return { ...state, failed: true };

    case JOKER:
      const { questions, questionIndex } = state;
      const copy = [...questions];
      copy[questionIndex] = { ...copy[questionIndex], answers: payload };
      return {
        ...state,
        hasHint: false,
        questions: [...copy]
      };

    case ANSWERED:
      return {
        ...state,
        answers: [...state.answers, { [state.questionIndex]: payload.answer }],
        totalPoints:
          payload.pointsToAdd !== undefined
            ? state.totalPoints + payload.pointsToAdd
            : state.totalPoints
      };

    case NEXT_QUESTION:
      return {
        ...state,
        questionIndex: state.questionIndex + 1
      };

    case PICK_CATEGORY:
      return { ...state, selectedCategory: payload };

    case PICK_DIFFICULTY:
      return { ...state, difficulty: payload };

    case RESTART:
      return {
        ...state,
        started: false,
        loading: false,
        questions: [],
        questionIndex: 0,
        selectedCategory: 0,
        difficulty: "medium",
        totalPoints: 0,
        hasHint: true,
        complete: false,
        failed: false,
        answers: []
      };

    case QUIZ_COMPLETE: {
      return { ...state, complete: true };
    }

    case GET_FAILED:
      return { ...state, loading: false };

    default:
      return { ...state };
  }
};
