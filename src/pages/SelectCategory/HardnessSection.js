import React from "react";
import { Radio } from "semantic-ui-react";
import styles from "./SelectCategory.module.css";

const HardnessSection = ({ checked, onChange }) => {
  return (
    <div id={styles.hardnesswrapper} className={styles.HardnessWrapper}>
      <h1>Select a difficulty </h1>
      <Radio
        className={styles.Radio}
        label="Easy"
        name="hardness"
        value="easy"
        checked={checked === "easy"}
        onChange={() => onChange("easy")}
      />
      <Radio
        label="Medium"
        name="hardness"
        value="medium"
        checked={checked === "medium"}
        onChange={() => onChange("medium")}
      />
      <Radio
        label="Hard"
        name="hardness"
        value="hard"
        checked={checked === "hard"}
        onChange={() => onChange("hard")}
      />
    </div>
  );
};

export default HardnessSection;
