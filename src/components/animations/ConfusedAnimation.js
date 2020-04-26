import React from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/animations/notfound.json";

const ConfusedAnimation = () => {
  return (
    <Lottie
      width={200}
      height={200}
      options={{
        animationData,
        autoplay: true,
        loop: true,
        rendererSettings: { preserveAspectRatio: "xMidYMid slice" }
      }}
    />
  );
};

export default ConfusedAnimation;
