import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { TodoStyle } from "./TodoStyles";


const Todo = ({ selected }) => {


  return (
    <TodoStyle>
      <h1>React-Django Todo List App</h1>
      <div className="items">
        <TodoForm />
        <TodoList selected={selected} />
      </div>
      <footer>
        <b>Copyright © 2022 RojiTech ToDo App</b>
      </footer>
    </TodoStyle>
  );
};

export default Todo;
