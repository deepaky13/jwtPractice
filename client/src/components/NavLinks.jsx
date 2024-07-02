import React from "react";
import { useDashboardContext } from "../pagers/DashBoard";
import { NavLink } from "react-router-dom";
import links from "../utils/links";
const NavLinks = (isBigSidebar) => {
  const { toggleSidebar, user } = useDashboardContext();
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, icon } = link;
        const { role } = user;
        if (path === "admin" && role !== "admin") return;
        return (
          <NavLink
            className="nav-link"
            to={path}
            key={text}
            onClick={isBigSidebar ? null : toggleSidebar}
            // * React always routes the parent with a child default to avoid this
            // * We need to use this 'end' Keyword to avoid that 'active css class,
            end
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
