import { useState } from "react";
import MyContext from "./myContext.js";

const ContextProvider = ({ children }) => {
  const [loggedin, setLoggedIn] = useState(false);
  const [theme, setTheme] = useState("dark");

  return (
    <MyContext.Provider
      value={{
        loggedin,
        setLoggedIn,
        theme,
        setTheme,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default ContextProvider;
