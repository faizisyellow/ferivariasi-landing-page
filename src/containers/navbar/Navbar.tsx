"use client";

import NavLink from "@/components/navLink";
import React, { FC } from "react";
import { links } from "./data";
import useScrollY from "@/hooks/useScrollY";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  const scrollY = useScrollY();

  return (
    <nav
      id="navbar"
      className={`top-0 sticky flex items-center justify-between z-50 h-max text-white px-6
        ${scrollY >= 74 ? "bg-primary" : ""}
        `}
    >
      <div>Logo</div>
      <NavLink items={links} />
    </nav>
  );
};

export default Navbar;
