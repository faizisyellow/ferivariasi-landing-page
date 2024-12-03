import React, { FC, ReactNode } from "react";

interface ThumbnailProps {
  children: ReactNode;
}

const Thumbnail: FC<ThumbnailProps> = ({ children }) => {
  return <section>{children}</section>;
};

export default Thumbnail;
