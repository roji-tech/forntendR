import React from "react";
import styled from "styled-components";
import AuthFunc from "./addons/AuthContext";

const LogoutStyle = styled.div`
  padding: 2px 10px;
  width: 100%;
  display: flex;
  justify-content: end;

  button {
    padding: 5px 10px;
    background-color: var(--blue);
    color: white;
    font-weight: 700;
  }
`;

const Logout = () => {
  const { logoutUser } = AuthFunc();

  return (
    <LogoutStyle>
      <button onClick={logoutUser}>Logout</button>
    </LogoutStyle>
  );
};

export default Logout;
