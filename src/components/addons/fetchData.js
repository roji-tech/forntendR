import axios from "axios";

const fetchData = async () => {
  const response = await axios.get("http://127.0.0.1:8000/api/todos/");
  
};

export default fetchData;
