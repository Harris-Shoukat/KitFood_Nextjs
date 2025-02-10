import React from "react";
import Image from "next/image";

const ImageComponent = ({ src, alt, width, height }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`object-cover rounded-xl`}
    />
  );
};

export default ImageComponent;
