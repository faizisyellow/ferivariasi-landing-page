import Link from "next/link";
import React, { FC } from "react";
import { buttonVariants } from "../ui/button";

export type Link = {
  label: string;
  hash: string;
  isCta?: boolean;
};

interface NavLinkProps {
  items: Link[];
}

const NavLink: FC<NavLinkProps> = ({ items }) => {
  return (
    <ul className="flex gap-x-6 items-center py-4">
      {items.map((link, index) => (
        <>
          <li key={index} className="hover:font-medium">
            {link.isCta ? (
              <Link
                href={link.hash}
                className={buttonVariants({ variant: "ghost" })}
              >
                {link.label}
              </Link>
            ) : (
              <Link href={link.hash}>{link.label}</Link>
            )}
          </li>
        </>
      ))}
    </ul>
  );
};

export default NavLink;
