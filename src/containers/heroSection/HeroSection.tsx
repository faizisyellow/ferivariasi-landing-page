import React, { FC, ReactNode } from "react";

interface HeroSectionProps {
  children: ReactNode;
}

const HeroSection: FC<HeroSectionProps> = ({ children }) => {
  return <div className="w-full relative h-screen">{children}</div>;
};

export default HeroSection;
