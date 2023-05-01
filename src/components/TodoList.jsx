import axios from "axios";
import { useState, useEffect } from "react";
const TodoList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <ul>
      {data.map(({ id, title }) => (
        <li key={id}>{title}</li>
      ))}
    </ul>
  );
};

export default TodoList;
