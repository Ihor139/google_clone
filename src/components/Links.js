import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { url: "/search", text: "🔎 All" },
  { url: "/news", text: "📰 News" },
  { url: "/image", text: "📸 Images" },
  { url: "/video", text: "📺 Videos" },
];

const Links = () => (
  <div className="flex justify-around items-center gap-x-10">
    {links.map(({ url, text }, ind) => (
      <NavLink key={ind}
        to={url}
        className={({ isActive }) => (isActive ? "text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2" : null)}
      >
        {text}
      </NavLink>
    ))}
  </div>
);

export default Links;
