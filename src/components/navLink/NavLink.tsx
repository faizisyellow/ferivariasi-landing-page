import Link from "next/link";
import React, { FC } from "react";
import { buttonVariants } from "../ui/button";

export type Link = {
  id: number;
  label: string;
  hash: string;
  isCta?: boolean;
};

interface NavLinkProps {
  items: Link;
  onOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavLink: FC<NavLinkProps> = ({ items, onOpen }) => {
  return (
    <li>
      <Link
        href={items.hash}
        className={buttonVariants({
          variant: items.isCta ? "ghost" : "link",
          className: "text-xl sm:text-[16px] text-white",
        })}
        onClick={() => {
          if (onOpen) {
            onOpen(false);
          }
        }}
      >
        {items.label}
      </Link>
    </li>
  );
};

export default NavLink;
