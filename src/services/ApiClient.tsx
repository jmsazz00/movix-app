import axios from "axios";

const apiBase = axios.create({
  baseURL: "https://www.thesportsdb.com/api/v1/json/3",
});

class ApiClient<T> {
  endpoint = "";
  apiClient = apiBase;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = () => {
    return this.apiClient.get<T>(this.endpoint).then((res) => res.data);
  };
}

export default ApiClient;
