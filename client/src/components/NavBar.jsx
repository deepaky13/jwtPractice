import React from "react";
import Wrapper from "../assets/wrappers/Navbar";
import { MdAlignHorizontalLeft } from "react-icons/md";
import Logo from "./Logoo";
import { useDashboardContext } from "../pagers/DashBoard";
import LogoutContainer from "./LogoutContainer";
import ThemeToggle from "./ThemeToggle";
const NavBar = () => {
  const { toggleSidebar } = useDashboardContext();
  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <MdAlignHorizontalLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">Dashboard</h3>
        </div>
        <div className="btn-container">
          <ThemeToggle />
          <LogoutContainer />
        </div>
      </div>
    </Wrapper>
  );
};

export default NavBar;
