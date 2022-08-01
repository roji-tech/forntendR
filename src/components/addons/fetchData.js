import axios from "axios";
import { baseURL } from "./useAxios";

const fetchData = async () => {
  const response = await axios.get(`${baseURL}api/todos/`);
  
};

export default fetchData;
