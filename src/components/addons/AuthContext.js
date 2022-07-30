import { createContext, useState, useEffect, useContext } from "react";
// import axiosInstance from "./axiosInstance";
// import axios from "axios";
import customJwtDecode from "../../utils/custom_JWT_decode";
import useAxios from "./useAxios";
import { useNavigate } from "react-router-dom";

const INITIAL_STATE = {
  todos: [],
  user: null,
  authTokens: null,
  setTodos: null,
  setAuthTokens: null,
  setUser: null,
  loginUser: null,
  logoutUser: null,
};

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [todos, setTodos] = useState();
  const axiosInstance = useAxios();

  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );

  const [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? customJwtDecode(JSON.parse(localStorage.getItem("authTokens")).access)
      : null
  );

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();

    let formdata = new FormData();
    let email = e.target.email.value.trim();
    let password = e.target.password.value.trim();
    formdata.append("email", email);
    formdata.append("password", password);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/token/",
        requestOptions
      );

      if (response.status === 200) {
        const data = await response.json();
        setAuthTokens({ ...data });
        localStorage.setItem("authTokens", JSON.stringify(data));
        let access = customJwtDecode(data.access);
        setUser({ ...access });
        // console.log("=======================================")
        navigate("/", { replace: true });
      }
      // else {
      // }
    } catch (error) {
      console.log(error);
    }
  };

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    console.log("loging out");
    // localStorage.removeItem("access_token");
    // localStorage.removeItem("refresh_token");
    navigate("/login");
  };

  let contextData = {
    todos: todos,
    user: user,
    authTokens: authTokens,
    setTodos: setTodos,
    setAuthTokens: setAuthTokens,
    setUser: setUser,
    loginUser: loginUser,
    logoutUser: logoutUser,
  };

  useEffect(() => {
    if (authTokens) {
      setUser(customJwtDecode(authTokens.access));
    }
  }, [authTokens]);

  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  );
};

const AuthFunc = () => {
  return useContext(AuthContext);
};

export default AuthFunc;
