import { AxiosRequestConfig } from "axios";
import axios from "./axios";

export const deleter = (url: string, config?: AxiosRequestConfig) => {
  return axios.delete(url, config);
};
