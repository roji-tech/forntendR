import React from "react";
import styled from "styled-components";

const TodoListStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: transparent;
  background-color: inherit;

  .todoCount {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #352f2f;
    font-style: italic;
    font-weight: 1000;

    p {
      font-size: var(--fontMed);
    }

    .p1 {
      font-size: var(--fontMed);
      background: var(--bg-dark);
      padding: 10px;
      border-radius: 30px;
    }
  }

  .topBAr{
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: start

    
  }

  //   @media screen and (max-width: 1024px) {
  //     width: 70%;
  //   }
  //   @media screen and (max-width: 800px) {
  //     width: 80%;
  //   }
  //   @media screen and (max-width: 500px) {
  //     width: 98%;
  //   }
`;

const TodoList = () => {
  return (
    <TodoListStyle>
      <div className="topBar">
        <button>Delete Completed</button>
        <button>Delete </button>
      </div>
      <div className="todoCount">
        <p>YOUR TODOS</p>
        <p className="p1"> 7 </p>
      </div>
    </TodoListStyle>
  );
};

export default TodoList;
