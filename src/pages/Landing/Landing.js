import React from "react";
import styles from "./Landing.module.css";
import AtomAnimation from "../../components/animations/AtomAnimation";
import LinkButton from "../../components/ui/buttons/LinkButton";
import FlexPageWrapper from "../../components/ui/layout/FlexPageWrapper";

const Landing = () => {
  return (
    <FlexPageWrapper>
      <AtomAnimation />
      <h1 className={styles.Title}>Reactivia : A Trivia Game</h1>
      <LinkButton
        to="/pick-category"
        text="Let's Start!"
        className={styles.Button}
      />
    </FlexPageWrapper>
  );
};

export default Landing;
