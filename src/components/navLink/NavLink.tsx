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
  items: Link[];
}

const NavLink: FC<NavLinkProps> = ({ items }) => {
  return (
    <ul className="flex items-center py-4">
      {items.map((link) => (
        <li key={link.id}>
          <Link
            href={link.hash}
            className={buttonVariants({
              variant: link.isCta ? "ghost" : "link",
            })}
            style={link.isCta ? { marginLeft: "1rem" } : undefined}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLink;
