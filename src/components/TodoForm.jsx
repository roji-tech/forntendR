import React, { useState } from "react";
import styled from "styled-components";

const TodoFormStyle = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: green;

  h3 {
    margin: 5px;
  }

  .form {
    display: grid;
    grid-template-columns: 12fr 2fr;
    gap: 1em;
    width: 100%;

    @media screen and (max-width: 500px) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .inputs {
      display: flex;
      flex-direction: column;
      gap: 0.7em;
      width: 100%;

      input,
      textarea {
        padding: 10px;
        width: 100%;
        outline: none;
        resize: none;
      }
      textarea {
        width: 100%;
      }
    }

    .buttons {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      padding-right: 10px;

      @media screen and (max-width: 500px) {
        flex-direction: row;
        width: 100%;
        justify-content: space-evenly;
        padding: 15px;
        gap: 0.5em;
      }

      button {
        padding: 6px;
        border-radius: 10px;

        @media screen and (max-width: 500px) {
          width: 50%;
          padding: 8px;
        }
      }
    }
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

const TodoForm = () => {
  const [task, setTask] = useState();
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevents browser refresh
    console.log(task);
    console.log(desc);
  };

  return (
    <TodoFormStyle className="todo-form" onSubmit={handleSubmit}>
      <h3>Add New Todo</h3>
      <div className="form">
        <div className="inputs">
          <input
            type="text"
            placeholder="Task"
            onChange={(e) => setTask(e.target.value)}
          />
          <textarea
            rows={3}
            name="description"
            placeholder="Task Description"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <div className="buttons">
          <button type="reset">Clear</button>
          <button type="submit">ADD</button>
        </div>
      </div>
    </TodoFormStyle>
  );
};

export default TodoForm;
