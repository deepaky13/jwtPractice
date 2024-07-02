import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashBoard,
  Error,
  AddJob,
  AllJobs,
  Profile,
  Stats,
  Admin,
  EditJob,
} from "./pagers";

import { action as registerAction } from "./pagers/Register";
import { action as loginAction } from "./pagers/Login";
import { loader as dashboardLoader } from "./pagers/DashBoard";
import { action as addJobAction } from "./pagers/AddJob";
import { loader as allJobsLoader } from "./pagers/AllJobs";
import { loader as editJobLoader } from "./pagers/EditJob";
import { action as editJobAction } from "./pagers/EditJob";
import { action as deleteJobAction } from "./pagers/DeleteJob";
import { loader as adminLoader } from "./pagers/Admin";
import { action as profileAction } from "./pagers/Profile";
import { loader as statsLoader } from "./pagers/stats";

export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("darkTheme") === "true";
  document.body.classList.toggle("dark-theme", isDarkTheme);
  return isDarkTheme;
};

checkDefaultTheme();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "dashboard",
        element: <DashBoard isDarkThemeEnabled />,
        loader: dashboardLoader,
        children: [
          {
            index: true,
            element: <AddJob />,
            action: addJobAction,
          },
          {
            path: "stats",
            element: <Stats />,
            loader: statsLoader,
          },
          {
            path: "admin",
            element: <Admin />,
            loader: adminLoader,
          },
          {
            path: "profile",
            element: <Profile />,
            action: profileAction,
          },
          {
            path: "All Jobs",
            element: <AllJobs />,
            loader: allJobsLoader,
          },
          {
            path: "edit-job/:id",
            element: <EditJob />,
            loader: editJobLoader,
            action: editJobAction,
          },
          {
            path: "delete-job/:id",
            action: deleteJobAction,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
