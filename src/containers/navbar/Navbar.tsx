import React, { FC, ReactNode } from "react";

interface NavbarProps {
  children: ReactNode;
}

const Navbar: FC<NavbarProps> = ({ children }) => {
  return (
    <nav
      title="navbar"
      id="navbar"
      className="sticky flex items-center justify-between bg-primary text-white px-6"
    >
      {children}
    </nav>
  );
};

export default Navbar;
