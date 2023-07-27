import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import MyContext from "../myContext";

const Header = () => {
  const { theme, setTheme } = useContext(MyContext);

  return (
    <div>
      <div className="bg-fuchsia-700 max-w-5xl mx-auto px-10 py-5 rounded-lg flex gap-20 justify-center">
        <Link className="text-2xl hover:opacity-70 text-white" to="/">
          Home
        </Link>
        <Link className="text-2xl hover:opacity-70 text-white" to="/todo">
          Todo
        </Link>
        <button onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}>
          <img src={`/icons/${theme === "dark" ? "light" : "dark"}.png`} alt="Theme toggle" className="w-10 h-10" />
        </button>
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
