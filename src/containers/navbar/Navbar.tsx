"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { links as items } from "./data";
import NavLink from "@/components/navLink";
import Link from "next/link";
import Image from "next/image";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
  };

  const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <motion.nav
      id="navbar"
      className={`fixed top-0 w-full z-50 ${scrollY >= 5 ? "bg-primary ease-in duration-150" : ""}`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="flex items-center justify-between px-6 py-4">
        <Link
          href={"/"}
          className="text-white no-underline"
        >
          <Image
            src={"https://res.cloudinary.com/dllk4fyv8/image/upload/v1735127707/logo_bhenjo.png"}
            alt="logo"
            width={60}
            height={40}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-2">
            {items.map((link) => (
              <NavLink
                key={link.id}
                items={link}
              />
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu with Overlay */}
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/50 sm:hidden"
            initial="hidden"
            animate="visible"
            variants={overlayVariants}
            onClick={() => setIsOpen(false)}
          />

          {/* Menu */}
          <motion.div
            className="fixed right-0 top-0 h-full w-[350px] bg-primary pt-20 sm:hidden"
            initial="hidden"
            animate="visible"
            variants={menuVariants}
          >
            <ul className="flex flex-col items-center gap-6 pt-8">
              {items.map((link) => (
                <NavLink
                  key={link.id}
                  items={link}
                  onOpen={setIsOpen}
                />
              ))}
            </ul>
          </motion.div>
        </>
      )}
    </motion.nav>
  );
};

export default Navbar;
