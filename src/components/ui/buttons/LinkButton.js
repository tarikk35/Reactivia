import React from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";

const LinkButton = ({ to, text, className, ...rest }) => {
  return (
    <Link className={styles.Button + " " + className} to={to} {...rest}>
      {text}
    </Link>
  );
};

export default LinkButton;
