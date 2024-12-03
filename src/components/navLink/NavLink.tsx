import React, { FC } from "react";

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
    <ul className="flex gap-x-4">
      {items.map((link) => (
        <>
          <li>
            {link.isCta ? <p>coba</p> : <a href={link.hash}>{link.label}</a>}
          </li>
        </>
      ))}
    </ul>
  );
};

export default NavLink;
