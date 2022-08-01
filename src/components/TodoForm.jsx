import React, { useRef } from "react";
import { TodoFormStyle } from "./TodoStyles";
import AuthFunc from "./addons/AuthContext";
import useAxios from "./addons/useAxios";
import axios from "axios";

const TodoForm = () => {
  const axiosInstance = useAxios();
  const { setTodos } = AuthFunc();
  const ref = useRef("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let task1 = ref.current.value;
    if (task1 === "") {
      return;
    }
    try {
      const response = await axiosInstance.post("api/todos/", {
        title: task1,
      });

      const data = await response.data;
      setTodos((prev) => [data, ...prev]);
      ref.current.value = "";
    } catch (error) {
      console.log("error");
    }
    // let formdata = new FormData();
    // formdata.append("title", "task");
    // let requestOptions = {
    //   method: "POST",
    //   body: formdata,
    //   redirect: "follow",
    // };
    // await fetch("http://127.0.0.1:8000/api/todos/", requestOptions)
    //   .then((response) => response.text())
    //   .then((result) => console.log(result))
    //   .catch((error) => console.log("error", error));
  };

  const handleReset = () => {
    ref.current.value = "";
  };

  return (
    <TodoFormStyle className="todo-form" onSubmit={handleSubmit}>
      <h3>Add New Todo</h3>
      <form className="form">
        <div className="inputs">
          <input ref={ref} type="text" placeholder="Task" required={true} />
        </div>
        <div className="buttons">
          <button type="reset" onClick={handleReset}>
            Clear
          </button>
          <button type="submit" onClick={handleSubmit}>
            ADD
          </button>
        </div>
      </form>
    </TodoFormStyle>
  );
};

export default TodoForm;
