import { useEffect, useState } from "react";
import AuthFunc from "./addons/AuthContext";
import useAxios from "./addons/useAxios";
import { TodoListStyle } from "./TodoStyles";
import { AiFillDelete, AiOutlineCheckCircle } from "react-icons/ai";

const TodoList = ({ selected }) => {
  const { todos, setTodos } = AuthFunc();
  const axiosInstance = useAxios();
  const [filter, setFilter] = useState([]);

  const [choice, setChoice] = selected;

  const fetchTodo = async () => {
    try {
      const response = await axiosInstance.get("api/todos/");
      const data = await response.data;
      return setTodos(data);
    } catch (error) {
      console.log("error");
    }
  };

  const handleDelete = async (id) => {
    await axiosInstance.delete(`api/todos/${id}/`);
    const newTodos = await todos.filter((todo) => todo.id !== id);
    await setTodos(newTodos);
  };

  const toggleCompleted = async (id, completed) => {
    let formdata = new FormData();
    formdata.append("completed", !completed);
    // formdata.append("title", "oooooooooo");
    await axiosInstance.patch(`api/todos/${id}/`, formdata);
    // const data = await response.data;
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !completed } : todo
    );
    setTodos([...newTodos]);
  };

  const dropDownFilter = (e) => {
    setChoice(e.target.value);
  };

  const filterTodos = () => {
    let filtering = [];

    selected[0] === "All" && (filtering = [...todos]);

    selected[0] === "Completed" &&
      (filtering = todos.filter((todo) => todo.completed === true));

    selected[0] === "Incomplete" &&
      (filtering = todos.filter((todo) => todo.completed === false));

    setFilter([...filtering]);
  };

  const handleDeleteAll = async (e) => {
    e.preventDefault();
    await axiosInstance.delete(`api/del-all/`);
    await setTodos([]);
  };

  const handleDeleteCompleted = async (e) => {
    e.preventDefault();
    await axiosInstance.delete(`api/del-completed/`);
    const filtering = await todos.filter((todo) => todo.completed === false);
    await setTodos([...filtering]);
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  useEffect(() => {
    filterTodos();
  }, [todos, selected]);

  return (
    <TodoListStyle>
      <div className="topBar">
        <div className="del_multiple">
          <button
            className="del_multiple_btn"
            onClick={(e) => handleDeleteCompleted(e)}
          >
            Delete Completed
          </button>
          <button
            className="del_multiple_btn"
            onClick={(e) => handleDeleteAll(e)}
          >
            Delete All{" "}
          </button>
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
        <p className="p1"> {todos.length} </p>
      </div>
      <ul>
        {filter.length === 0 ? (
          <h1>No Todo</h1>
        ) : (
          filter.map((todo, index) => (
            <li key={todo.id}>
              <div className="todo">
                <p className="p1">
                  <b className="index"> {index + 1} </b> {todo.title}
                </p>
                <p className="timestamp">{todo.created}</p>
              </div>

              <div className="iconDiv">
                <div className="icon">
                  <AiOutlineCheckCircle
                    onClick={() => toggleCompleted(todo.id, todo.completed)}
                    size={18}
                    color={`${todo.completed ? "green" : "red"}`}
                  />
                </div>
                <div className="icon">
                  <AiFillDelete
                    onClick={() => handleDelete(todo.id)}
                    size={18}
                    color="red"
                  />
                </div>
              </div>
            </li>
          ))
        )}
      </ul>
    </TodoListStyle>
  );
};

export default TodoList;
