import React, { useRef, useEffect, useState } from "react";

const ImageToggleOnScroll = ({ primaryImg, secondaryImg }) => {
  const imageRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    setInView(isInView());
    setIsLoading(false);

    return () => {
      return window.removeEventListener("scroll", scrollHandler), [isLoading];
    };
  });

  const isInView = () => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }
    return false;
  };

  const scrollHandler = () => {
    setInView(() => {
      return isInView();
    });
  };

  const [inView, setInView] = useState(false);

  return (
    !isLoading && (
      <img
        src={inView ? secondaryImg : primaryImg}
        alt={""}
        ref={imageRef}
        width="200"
        height="200"
      />
    )
  );
};

export default ImageToggleOnScroll;
