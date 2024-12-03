import React, { FC } from "react";

interface ThumbnailProps {}

const Thumbnail: FC<ThumbnailProps> = ({}) => {
  return (
    <section className="background-image absolute h-full top-0 left-0 right-0 bottom-0 w-full"></section>
  );
};

export default Thumbnail;
