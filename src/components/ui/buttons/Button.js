import React from "react";
import styles from "./Button.module.css";

const Button = ({ text, className, ...rest }) => {
  return (
    <div className={styles.Button + " " + className} {...rest}>
      {text}
    </div>
  );
};

export default Button;
