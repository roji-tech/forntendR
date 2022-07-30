// var formdata = new FormData();
// formdata.append("refresh", authTokens.refresh);

// var requestOptions = {
//   method: "POST",
//   body: formdata,
//   redirect: "follow",
// };

// fetch("http://127.0.0.1:8000/api/token/refresh/", requestOptions)
//   .then((response) => response.text())
//   .then((result) => {
//     console.log(result);

//     axiosInstance.defaults.headers[
//       "Authorization"
//     ] = `JWT ${result.access}`;
//     axios.defaults.headers.common["Authorization"] = `JWT ${result.access}`;
//     req.headers.Authorization = `JWT ${result.access}`;

//     localStorage.setItem("authTokens", JSON.stringify(result));
//     localStorage.setItem("access_token", result.access);

//     setAuthTokens(result);
//     setUser(jwt_decode(result.access));

//     return req;
//   })
//   .catch((error) => {
//     console.log("error", error);
//     logoutUser();
//   });


  const loginUser = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post("api/token/", {
        email: e.target.email.value.trim(),
        password: e.target.password.value.trim(),
      });
      const data = await response.data;
      setUser(() => jwt_decode(data.access));
      setAuthTokens(() => data);
      navigate("/", { replace: true });
      console.log("===login in user id=====" + JSON.stringify(user));
      localStorage.setItem("authTokens", JSON.stringify(data));
      localStorage.setItem("access_token", JSON.stringify(data));
      axiosInstance.defaults.headers["Authorization"] = `JWT ${data.access}`;
      axios.defaults.headers.common["Authorization"] = `JWT ${data.access}`;
      console.log(
        JSON.stringify(axiosInstance.defaults.headers) + "khjlhkjghkglhlg"
      );
      console.log(
        JSON.stringify(axiosInstance.defaults.baseURL) + "dfanhfjdhlkjahfkj"
      );
    } catch (error) {
      console.log(error);
    }

    // if (response.status === 200) {

    // } else {
    // }
  };
