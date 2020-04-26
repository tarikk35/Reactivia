import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./Button.module.css";

const BackButton = ({ className, to, onClick }) => {
  const history = useHistory();
  return (
    <h4
      className={styles.BackButton + " " + className}
      onClick={onClick ? onClick : () => history.push(to)}
    >
      Go Back
    </h4>
  );
};

export default BackButton;
