import axios from "axios";

const baseURL = "http://127.0.0.1:8000/";

let authTokens = localStorage.getItem("authTokens")
  ? JSON.parse(localStorage.getItem("authTokens"))
  : "null";

const axiosInstance = axios.create({
  baseURL,
  headers: { Authorization: `JWT ${authTokens?.access}` },
});

axiosInstance.interceptors.request.use(async (req) => {
  // req.headers.Authorization = `JWT ${req.data.access}`;

  if (!authTokens) {
    authTokens = localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null;
    req.headers.Authorization = `JWT ${authTokens?.access}`;
  }

  // const user = jwt_decode(authTokens?.access)
  // const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

  // if(!isExpired) return req
  if (req.status !== 200) {
    const response = await axios.post(`${baseURL}api/token/refresh/`, {
      refresh: authTokens.refresh,
    });
    localStorage.setItem("authTokens", JSON.stringify(response.data));
    req.headers.Authorization = `JWT ${response.data.access}`;
    axios.defaults.headers.common[
      "Authorization"
    ] = `JWT ${response.data.access}`;
    localStorage.setItem("authTokens", JSON.stringify(response.data));
  }

  return req;
});

// axiosInstance.interceptors.response.use(
//   (resp) => resp,
//   async (error) => {
//     if (error.response.status === 401 && !refresh) {
//       refresh = true;

//       const response = await axios.post(
//         "refresh",
//         {},
//         { withCredentials: true }
//       );

//       if (response.status === 200) {
//         axios.defaults.headers.common[
//           "Authorization"
//         ] = `Bearer ${response.data["token"]}`;

//         return axios(error.config);
//       }
//     }
//     refresh = false;
//     return error;
//   }
// );

export default axiosInstance;
