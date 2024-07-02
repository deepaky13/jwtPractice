// * creating the First component

import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
export default HomeLayout;
