import React from "react";
import styles from "./PageWrapper.module.css";

const FlexPageWrapper = ({ children, className }) => {
  return <div className={styles.FlexPageWrapper + " " + className}>{children}</div>;
};

export default FlexPageWrapper;
