import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const TodoList = () => {
  const fetchTodos = () =>
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.data);
  const {
    data: todos,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <ul>
      {todos?.map(({ id, title }) => (
        <li key={id}>{title}</li>
      ))}
    </ul>
  );
};

export default TodoList;
