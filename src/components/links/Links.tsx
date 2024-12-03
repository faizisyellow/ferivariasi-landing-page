import React, { FC } from "react";

interface Links {
  label: string;
  link: string;
  isCta?: boolean;
}

interface LinksProps {
  items: Links[];
}

const Links: FC<LinksProps> = ({ items }) => {
  return (
    <ul className="flex gap-x-4">
      {items.map((link) => (
        <>
          <li>
            {link.isCta ? <p>coba</p> : <a href={link.link}>{link.label}</a>}
          </li>
        </>
      ))}
    </ul>
  );
};

export default Links;
