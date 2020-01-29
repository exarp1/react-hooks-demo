import React, { useRef } from "react";

const ImageToggleOnMouseOver = ({ primaryImg, secondaryImg }) => {
  const imageRef = useRef(null);

  const setImg = img => () => (imageRef.current.src = img);
  const setPrimaryImg = setImg(primaryImg);
  const setSecondaryImg = setImg(secondaryImg);

  return (
    <img
      src={primaryImg}
      alt={""}
      ref={imageRef}
      onMouseOver={setSecondaryImg}
      onMouseOut={setPrimaryImg}
    />
  );
};

export default ImageToggleOnMouseOver;
