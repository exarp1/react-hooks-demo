import React, { useRef } from "react";

const ImageToggleOnMouseOver = ({ primaryImg, secondaryImg }) => {
  const imageRef = useRef(null);

  return (
    <img
      src={primaryImg}
      alt={""}
      ref={imageRef}
      onMouseOver={() => {}}
      onMouseOut={() => {}}
    />
  );
};

export default ImageToggleOnMouseOver;
