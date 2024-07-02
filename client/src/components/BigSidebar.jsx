import Wrapper from "../assets/wrappers/BigSidebar";
import React from "react";
import NavLinks from "./NavLinks";
import Logo from "./Logoo";
import { useDashboardContext } from "../pagers/DashBoard";
const BigSidebar = () => {
  const { showSidebar } = useDashboardContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container " : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks isBigSidebar />
        </div>
      </div>
      ;
    </Wrapper>
  );
};

export default BigSidebar;
