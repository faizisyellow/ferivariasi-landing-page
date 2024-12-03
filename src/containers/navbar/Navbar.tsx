import React, { FC, ReactNode } from "react";

interface NavbarProps {
  children: ReactNode;
}

const Navbar: FC<NavbarProps> = ({ children }) => {
  return (
    <nav title="navbar" id="navbar">
      {children}
    </nav>
  );
};

export default Navbar;
