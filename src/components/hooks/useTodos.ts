import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Todos {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const useTodos = () => {
  const fetchTodos = () =>
    axios
      .get<Todos[]>("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.data);
  return useQuery<Todos[], Error>({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });
};

export default useTodos;
