
// To calculate question scores
export const hardnessMultipliers = {
  easy: 10,
  medium: 30,
  hard: 50
};

export const DEFAULT_QUESTION_TIME = 15;

// Based on the Grade, user will get a special message.
export const gradeMessage = {
  "∞": "You must be a hacker !",
  "S+": "Excellent Score !",
  S: "Amazing Score!",
  "S-": "Flawless Score!",
  "A+": "Great Score!",
  A: "Nice job!",
  "A-": "You did good!",
  "B+": "Very good!",
  B: "Good!",
  "B-": "Not Bad!",
  C: "Solid",
  D: "OK",
  "F-": "Meh"
};

// Based on the grade, user will get different Grade background color.
export const gradeColor = {
  "∞": "",
  "S+": "#d4000e",
  S: "#ff1726",
  "S-": "#ad2831",
  "A+": "#ffb700",
  A: "#e6ac00",
  "A-": "#d9b500",
  "B+": "#2684ff",
  B: "#0984db",
  "B-": "#0054db",
  C: "#00cc2c",
  D: "#00782a",
  "F-": "#bdbdbd"
};
