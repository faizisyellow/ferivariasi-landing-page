import React, { FC, ReactNode } from "react";

interface BoxProps {
  children: ReactNode;
  title: string;
  id?: string;
  overflowX?: boolean;
  backgroundColor?: string;
}

const Box: FC<BoxProps> = ({
  children,
  title,
  overflowX,
  id,
  backgroundColor,
}) => {
  return (
    <div
      id={id}
      className={`grid place-items-center py-20 
        ${!overflowX ? "mx-6" : ""}
        ${backgroundColor}
        `}
    >
      <h1 className="mb-10">{title.toLocaleUpperCase()}</h1>
      {children}
    </div>
  );
};

export default Box;
