import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import APIClient from "../services/api-client";
const apiClient = new APIClient<Todos>("/todos");

interface Todos {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const useTodos = () => {
  return useQuery<Todos[], Error>({
    queryKey: ["todos"],
    queryFn: apiClient.getAll,
  });
};

export default useTodos;
