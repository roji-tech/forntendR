import axios from "axios";
import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";
import { AuthFunc } from "./AuthContext";
// import { useNavigate } from "react-router-dom";

const baseURL = "http://127.0.0.1:8000/";

const useAxios = () => {
  let authTokens = localStorage.getItem("refresh_token")
    ? JSON.parse(localStorage.getItem("refresh_token"))
    : "null";
  // let navigate = useNavigate();

  const { setUser, setAuthTokens } = AuthFunc();

  const axiosInstance = axios.create({
    baseURL,
    headers: authTokens ? { Authorization: `JWT ${authTokens?.access}` } : "",
  });

  axiosInstance.interceptors.request.use(async (req) => {

    // const user = authTokens ? jwt_decode(authTokens.access) : null;
    // const isExpired = authTokens
    // ? dayjs.unix(user.exp).diff(dayjs()) < 1
    // : null;

    // if (!isExpired) return req;

    const response = await axios.post(`${baseURL}/api/token/refresh/`, {
      refresh: authTokens.refresh,
    });

    // if (response.status === 200) {
    //   axios.defaults.headers.common[
    //     "Authorization"
    //   ] = `JWT ${response.data.access}`;
    //   req.headers.Authorization = `JWT ${response.data.access}`;

    //   localStorage.setItem("authTokens", JSON.stringify(response.data));
    //   localStorage.setItem("access_token", response.data.access);

    setAuthTokens(response.data);
    setUser(jwt_decode(response.data.access));

    //   return req;
    // } else {
    //   logoutUser();
    // }
  });

  return axiosInstance;
};

export default useAxios;

// import axios from "axios";

// const baseURL = "http://127.0.0.1:8000/";

// const axiosFetch = axios.create({
//   baseURL: baseURL,
//   timeout: 7000,
//   headers: {
//     // Authorisation: localStorage.getItem("access_token")
//     //   ? "JWT " + localStorage.getItem("access_token")
//     //   : null,
//     "Content-Type": "application/json",
//     accept: "application/json",
//   },
// });

// // {
// //     "refresh":
// //      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY1NDU3NjM1OSwianRpIjoiOWU3YzM2OGNiZjE2NDk1NGI3MTVhM2VjODU4MzFhN2EiLCJ1c2VyX2lkIjo5fQ.LwpmiJzXd-K-deLMmQ-8tWZgcw7qcoPdtimlFuWV6qk",
// //     "access":
// //      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU0NDkwNTU5LCJqdGkiOiJjMWFlODQxYjA1YmU0OTc4YWI0N2Q2MjA5YWExYTQ1YyIsInVzZXJfaWQiOjl9.hWwn5_xjNDTJtpAAeXdF8yD5JipKm068YfJtDQiIjuE"
// // }

// axiosFetch.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async function (error) {
//     const originalRequest = error.config;

//     if (typeof error.response === "undefined") {
//       alert(
//         "A server/network error occurred. " +
//           "Looks like CORS might be the problem. " +
//           "Sorry about this - we will get it fixed shortly."
//       );
//       return Promise.reject(error);
//     }

//     if (
//       error.response.status === 401 &&
//       originalRequest.url === baseURL + "token/refresh/"
//     ) {
//       window.location.href = "/login/";
//       return Promise.reject(error);
//     }

//     if (
//       error.response.data.code === "token_not_valid" &&
//       error.response.status === 401 &&
//       error.response.statusText === "Unauthorized"
//     ) {
//       const refreshToken = localStorage.getItem("refresh_token");

//       if (refreshToken) {
//         const tokenParts = JSON.parse(atob(refreshToken.split(".")[1]));

//         // exp date in token is expressed in seconds, while now() returns milliseconds:
//         const now = Math.ceil(Date.now() / 1000);

//         if (tokenParts.exp > now) {
//           return axiosFetch
//             .post("/token/refresh/", {
//               refresh: refreshToken,
//             })
//             .then((response) => {
//               localStorage.setItem("access_token", response.data.access);
//               localStorage.setItem("refresh_token", response.data.refresh);

//               axiosFetch.defaults.headers["Authorization"] =
//                 "JWT " + response.data.access;
//               originalRequest.headers["Authorization"] =
//                 "JWT " + response.data.access;

//               return axiosFetch(originalRequest);
//             })
//             .catch((err) => {
//               console.log(err);
//             });
//         } else {
//           window.location.href = "/login/";
//         }
//       } else {
//         window.location.href = "/login/";
//       }
//     }

//     // specific error handling done elsewhere
//     return Promise.reject(error);
//   }
// );

// export default axiosFetch;
