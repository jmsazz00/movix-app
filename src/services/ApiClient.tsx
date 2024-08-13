import axios, { AxiosRequestConfig } from "axios";

const apiBase = axios.create({
  baseURL: "https://www.thesportsdb.com/api/v1/json/3",
});

class ApiClient<T> {
  endpoint = "";
  apiClient = apiBase;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = async (params?: AxiosRequestConfig) => {
    const res = await this.apiClient
      .get<T>(this.endpoint, { ...params });
    return res.data;
  };
}

export default ApiClient;
