import { useEffect, useCallback } from "react";
import styled from "styled-components";
import AuthFunc from "./addons/AuthContext";
import useAxios from "./addons/useAxios";

const TodoList = ({ selected }) => {
  const { todos, setTodos } = AuthFunc();
  const axiosInstance = useAxios();

  const [choice, setChoice] = selected;

  const fetchTodo = async () => {
    try {
      const response = await axiosInstance.get("api/todos/");

      const data = await response.data;
      console.log(data);
      return setTodos(data);
    } catch (error) {
      console.log({ error: error });
      return "error";
    }
  };

  const handleDelete = (e) => {
    console.log("deleted");
  };

  const handleCompleted = (e) => {
    console.log("Completed");
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  const dropDownFilter = (e) => {
    setChoice(e.target.value);
  };

  return (
    <TodoListStyle>
      <div className="topBar">
        <div>
          <button>Delete Completed</button>
          <button>Delete All </button>
        </div>
        <select
          value={choice}
          name="filter"
          onChange={dropDownFilter}
          id="filter"
        >
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Incomplete">Incomplete</option>
        </select>
      </div>
      <div className="todoCount">
        <p>YOUR TODOS</p>
        <p className="p1"> 7 </p>
      </div>
      <ul>
        {todos.map((item, index) => (
          <li key={item.id}>
            <div className="todo">
              <div className="todo-title">
                <p className="p1">
                  <b> {index + 1}: </b> coding
                </p>
                {/* <p>{item}</p> */}
              </div>
            </div>

            <div className="iconDiv">
              <div>icon</div>
              <div>icon</div>
            </div>
          </li>
        ))}
      </ul>
    </TodoListStyle>
  );
};

export default TodoList;

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

  .topBar {
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    /* @media screen and (max-width: 500px) {
      align-items: flex-start;
      justify-content: end;
      flex-direction: column-reverse;
    } */

    div {
      display: flex;
      align-items: flex-end;
      gap: 0.5em;

      @media screen and (max-width: 500px) {
        align-items: flex-start;
        flex-direction: column;
        gap: 0;
      }

      button {
        padding: 10px;
      }
    }

    select {
      align-self: center;
      justify-self: flex-end;
      /* appearance: none;
      -webkit-appearance: none; */
      margin-right: 10px;
      outline: none;
      padding: 5px;
      font-weight: 1000;
      font-size: 0.9em;
      border-radius: 10px;
      -webkit-padding-end: 20px;
      -moz-padding-end: 20px;
      -webkit-padding-start: 2px;
      -moz-padding-start: 2px;

      select::-ms-expand {
        /* display: none; Hide the default arrow in Internet Explorer 10 and Internet Explorer 11 */
      }
    }
  }

  ul {
    list-style: none;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 0.5em;

    li {
      display: grid;
      grid-template-columns: 10fr 2fr;
      align-items: center;
      box-sizing: border-box;
      border-left: 10px solid transparent;
      border-left-style: solid;
      background-color: rgb(6, 59, 59);

      .todo {
        display: flex;
        gap: 0.4em;
        padding: 15px 0;
        flex-direction: column;

        .todo-title {
          display: grid;
          grid-template-columns: 1.5fr 1.5fr 0.5fr;

          .p1 {
            text-align: justify;
            word-wrap: break-word;
          }

          @media screen and (max-width: 500px) {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            /* width: 100%;
            justify-content: space-evenly;
            padding: 15px; */
            gap: 0.5em;
          }
        }

        li.completed_todo {
          border-top-left-radius: 30px;
          border-left-color: #0000ff;
          background-color: rgb(0, 255, 255);
        }

        .desc {
          text-align: justify;
          border-left: 1px solid blue;
          padding-left: 10px;
        }
      }

      .iconDiv {
        display: flex;
        gap: 0.4em;
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
