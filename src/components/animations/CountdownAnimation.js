import React from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/animations/cd.json";

const CountdownAnimation = ({ start }) => {
  return (
    <Lottie
      width={"70vw"}
      height={"100vh"}
      eventListeners={[
        {
          eventName: "complete",
          callback: () => start()
        }
      ]}
      options={{
        autoplay: true,
        loop: false,
        animationData: animationData,
        rendererSettings: { preserveAspectRatio: "xMidYMid slice" }
      }}
    />
  );
};

export default CountdownAnimation;
