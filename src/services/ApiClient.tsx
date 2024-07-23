import axios, { AxiosRequestConfig } from "axios";

const apiBase = axios.create({
  baseURL: "https://www.thesportsdb.com/api/v1/json/3x",
});

class ApiClient<T> {
  endpoint = "";
  apiClient = apiBase;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (params?: AxiosRequestConfig) => {
    return this.apiClient
      .get<T>(this.endpoint, { ...params })
      .then((res) => res.data);
  };
}

export default ApiClient;
