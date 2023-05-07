import axios from "axios";

const axiostInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = async () => {
    const res = await axiostInstance.get<T[]>(this.endpoint);
    return res.data;
  };
}
export default APIClient;
