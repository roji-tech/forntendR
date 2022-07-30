import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import styled from "styled-components";
// import axiosInstance from "./addons/axiosInstance";
import useAxios from "./addons/useAxios";


const TodoStyle = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 10px;
  padding-bottom: 0;
  justify-content: center;
  text-align: center;
  background: blue;

  h1 {
    margin: 5px;
  }

  .items {
    display: flex;
    flex-direction: column;
    gap: 2em;
  }

  footer {
    padding: 10px;
    background-color: var(--bg-dark);
    margin: 10px -11px -11px -11px;
  }

  @media screen and (max-width: 1200px) {
    width: 800px;
  }

  @media screen and (max-width: 900px) {
    width: 600px;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const Todo = ({ selected }) => {
  const axiosInstance=  useAxios()

  const [todos, setTodos] = useState([]);

  const fetchTodo = async () => {
    // const response =
    await axiosInstance.get("api/todos/").then((response) => {
      if (response.status === 200) {
        const data = response.data;
        setTodos(() => response.data);
        // console.log(response.status + "====================== 444");
        // console.log(
        //   JSON.stringify(response.config.headers.Authorization) + " ================555"
        // );
      }
    }).catch((error) => {
      console.log("error")
      // console.log(error.message)
    })
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  return (
    <TodoStyle>
      <h1>React_Django Todo List App</h1>
      <div className="items">
        <TodoForm />
        <TodoList selected={selected} />
      </div>
      <footer>
        <p>Copyright © 2022 RojiTech ToDo App</p>
      </footer>
    </TodoStyle>
  );
};

export default Todo;
