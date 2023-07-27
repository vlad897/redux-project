import React, { useContext } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Todo from "../components/Todo";
import Page2 from "../components/Page2";
import Redirect from "../components/Redirect";
import MyContext from "../myContext";

const notLoggedInRouter = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <Redirect to="/login" />,
  },
]);

const loggedInRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "",
        element: <h1>Home</h1>,
      },
      {
        path: "todo",
        element: <Todo />,
      },
      {
        path: "page2",
        element: <Page2 />,
      },
    ],
  },
]);

const Router = () => {
  const { loggedin, theme } = useContext(MyContext);

  return (
    <div className={`w-screen h-screen ${theme === "dark" ? "bg-[#242424]" : "bg-[#f2f2f2]"}`}>
      <RouterProvider router={loggedin ? loggedInRouter : notLoggedInRouter} />
    </div>
  );
};

export default Router;
