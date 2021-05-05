import React from "react";
import Link from "next/link";

export default ({ links }) => {
  return (
    <nav>
      <ul>
        {links.map(link => (
          <li key={link.route}>
            <Link href={link.route}>
              <a>{link.pageName}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
