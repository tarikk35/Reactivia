import React from "react";
import correct from "../../assets/animations/correct.json";
import error from "../../assets/animations/error.json";
import Lottie from "react-lottie";

const NextQuestionAnimation = ({ wrong, callback }) => {
  return (
    <Lottie
      width={300}
      height={300}
      speed={wrong ? 1 : 3}
      eventListeners={[
        {
          eventName: "complete",
          callback: () => callback(true)
        }
      ]}
      options={{
        animationData: wrong ? error : correct,
        autoplay: true,
        loop: false,
        rendererSettings: { preserveAspectRatio: "xMidYMid slice" }
      }}
    />
  );
};

export default NextQuestionAnimation;
