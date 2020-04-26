import { DEFAULT_QUESTION_TIME, hardnessMultipliers } from "./constants";

// Calculates maximum available score and get the success percentage to give a letter grade based on that percentage.
export default ({ totalScore, questionCount, hardness }) => {
  const hardnessMultiplier = hardnessMultipliers[hardness];
  const maxScore = questionCount * hardnessMultiplier * DEFAULT_QUESTION_TIME;
  const grade = (totalScore / maxScore) * 100;
  return letterCalculator(grade);
};

const letterCalculator = grade => {
  if (grade > 99) return "∞";
  else if (grade > 95) return "S+";
  else if (grade > 90) return "S";
  else if (grade > 85) return "S-";
  else if (grade > 80) return "A+";
  else if (grade > 75) return "A";
  else if (grade > 70) return "A-";
  else if (grade > 65) return "B+";
  else if (grade > 60) return "B";
  else if (grade > 55) return "B-";
  else if (grade > 45) return "C";
  else if (grade > 35) return "D";
  else return "F-";
};
