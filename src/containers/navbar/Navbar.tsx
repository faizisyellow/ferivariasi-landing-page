"use client";
import NavLink from "@/components/navLink";
import React, { FC } from "react";
import { links } from "./data";
import useScrollY from "@/hooks/useScrollY";
import { easeIn, motion } from "motion/react";
import useMediaQuery from "@/hooks/useMediaQuery";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  const scrollY = useScrollY();
  const menuIcon = useMediaQuery("(max-width: 750px)");
  const animateNav = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4, easeIn } },
  };

  return (
    <motion.nav
      id="navbar"
      className={`top-0 fixed w-full flex items-center justify-between z-50 h-max text-white px-6
        ${scrollY >= 5 ? "bg-primary ease-in duration-150" : ""}
        `}
      initial="hidden"
      animate="visible"
      variants={animateNav}
    >
      <div>Logo</div>
      {menuIcon ? "mobile" : <NavLink items={links} />}
    </motion.nav>
  );
};

export default Navbar;
