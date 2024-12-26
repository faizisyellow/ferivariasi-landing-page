import React from "react";
import { FiStar } from "react-icons/fi";

interface RatingProps {
  value: number;
}

const Rating: React.FC<RatingProps> = ({ value }) => {
  return (
    <div className="flex">
      {Array.from({ length: value }).map((_, index) => (
        <>
          <FiStar
            key={index}
            size={15}
            strokeWidth={0}
            fill={"gold"}
            className="star"
          />
        </>
      ))}
    </div>
  );
};

export default Rating;
