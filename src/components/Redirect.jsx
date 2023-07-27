import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Redirect = ({ to }) => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(to);
  }, [to, navigate]);
  return <div></div>;
};

export default Redirect;
