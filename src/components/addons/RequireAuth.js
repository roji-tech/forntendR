import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthFunc from "./AuthContext";

// import dayjs from "dayjs";

export const RequireAuth = ({ children }) => {
  const { user } = AuthFunc();

  if (!user) {
    return <Navigate to={"/login"} />;
  }

  return children;
};
