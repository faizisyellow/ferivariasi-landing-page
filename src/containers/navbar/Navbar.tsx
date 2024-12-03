import NavLink from "@/components/navLink";
import React, { FC } from "react";
import { links } from "./data";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  return (
    <nav
      title="navbar"
      id="navbar"
      className="sticky flex items-center justify-between bg-primary text-white px-6"
    >
      <div>Logo</div>
      <NavLink items={links} />
    </nav>
  );
};

export default Navbar;
