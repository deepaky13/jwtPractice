import React from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import Wrapper from "../assets/wrappers/ThemeToggle";
import { useDashboardContext } from "../pagers/DashBoard";
const ThemeToggle = () => {
  const { isDarkTheme, toggoleDarkTheme } = useDashboardContext();
  return (
    <Wrapper onClick={toggoleDarkTheme}>
      {isDarkTheme ? (
        <BsFillSunFill className="toggle-icon" />
      ) : (
        <BsFillMoonFill className="toggle-icon" />
      )}
    </Wrapper>
  );
};

export default ThemeToggle;
