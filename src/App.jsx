import { useState } from "react";
import Todo from "./components/Todo";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RequireAuth2 from "./components/addons/RequireAuth2";
// import useAxios from "./components/addons/useAxios";
import { AuthProvider } from "./components/addons/AuthContext";

const App = () => {
  const selected = useState("All");

  return (
    <BrowserRouter basename="/">
      <AuthProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<RequireAuth2 />}>
              <Route index element={<Todo selected={selected} />} />
            </Route>
              <Route path="login" element={<Login />} />
            <Route path="reg" element={ <Register />} />
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
