import React from "react";
import { Outlet } from "react-router-dom";
import AuthFunc from "./AuthContext";
import Login from "../Login";

const RequireAuth2 = (props) => {
  const { user } = AuthFunc();

  return <div>{!user ? <Login /> : <Outlet {...props} />}</div>;
};

export default RequireAuth2;
