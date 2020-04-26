import React from "react";
import styles from "./NotFound.module.css";
import { useHistory } from "react-router-dom";
import ConfusedAnimation from "../../components/animations/ConfusedAnimation";
import Button from "../../components/ui/buttons/Button";
import FlexPageWrapper from "../../components/ui/layout/FlexPageWrapper";

const NotFound = () => {
  const history = useHistory();
  return (
    <FlexPageWrapper>
      <h1>Page is not found.</h1>
      <ConfusedAnimation />
      <Button
        className={styles.MarginTop}
        text="Go back to the game"
        onClick={() => history.push("/pick-category")}
      />
    </FlexPageWrapper>
  );
};

export default NotFound;
