import React, { FC, ReactNode } from "react";

interface ThumbnailProps {
  children: ReactNode;
}

const Thumbnail: FC<ThumbnailProps> = ({ children }) => {
  return (
    <section title="thubmnail" id="thumbnail">
      {children}
    </section>
  );
};

export default Thumbnail;
