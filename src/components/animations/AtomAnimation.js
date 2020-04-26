import React from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/animations/logo.json";

const AtomAnimation = () => {
  return (
    <Lottie
      width={"25vh"}
      height={"25vh"}
      speed={1}
      options={{
        autoplay: true,
        loop: true,
        animationData,
        rendererSettings: { preserveAspectRatio: "xMidYMid slice" }
      }}
    />
  );
};

export default AtomAnimation;
