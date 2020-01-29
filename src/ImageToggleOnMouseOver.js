import React from "react";

const ImageToggleOnMouseOver = ({ primaryImg, secondaryImg }) => {
  console.error(`Primary Image:
    ${primaryImg}`);

  return <img src={primaryImg} alt={""} />;
};

export default ImageToggleOnMouseOver;
