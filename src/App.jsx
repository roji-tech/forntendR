import { useState } from "react";
import Todo from "./components/Todo";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RequireAuth } from "./components/addons/RequireAuth";
// import useAxios from "./components/addons/useAxios";
import { AuthProvider } from "./components/addons/AuthContext";

const App = () => {
  const selected = useState("All");
  
  return (
    <BrowserRouter basename="/">
      <AuthProvider>
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={
                <RequireAuth>
                  <h3 className="h3">Make Your Todos</h3>
                  <Todo selected={selected} />
                </RequireAuth>
              }
            />
            <Route path="login" element={<Login />} />
            <Route path="reg" element={<Register />} />
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
