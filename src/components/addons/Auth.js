
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
      localStorage.setItem("authTokens", JSON.stringify(data));
      localStorage.setItem("access_token", JSON.stringify(data));
      axiosInstance.defaults.headers["Authorization"] = `JWT ${data.access}`;
      axios.defaults.headers.common["Authorization"] = `JWT ${data.access}`;

    } catch (error) {
      console.log(error);
    }

    // if (response.status === 200) {

    // } else {
    // }
  };
