import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import styled from "styled-components";

const TodoStyle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 55%;
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-content: center;
  padding: 10px;
  padding-bottom: 0;
  justify-content: center;
  text-align: center;
  background: blue;

  h1 {
    margin: 5px;
  }

  .items {
    gap: 1e m;
  }

  footer {
    padding: 10px;
    background-color: var(--bg-dark);
    margin: 10px -11px -11px -11px;
  }

  @media screen and (max-width: 1024px) {
    width: 75%;
  }
  @media screen and (max-width: 800px) {
    width: 90%;
  }
  @media screen and (max-width: 500px) {
    width: 98%;
  }
`;

const Todo = () => {
  return (
    <TodoStyle>
      <h1>React_Django Todo List App</h1>
      <div className="items">
        <TodoForm />
        <TodoList />
      </div>
      <footer>
        <p>Copyright © 2022 RojiTech ToDo App</p>
      </footer>
    </TodoStyle>
  );
};

export default Todo;
