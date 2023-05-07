import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import apiClient from "../services/api-client";

interface Todos {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const useTodos = () => {
  const fetchTodos = () =>
    apiClient.get<Todos[]>("/albums").then((res) => res.data);
  return useQuery<Todos[], Error>({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });
};

export default useTodos;
