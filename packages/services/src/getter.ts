import { AxiosRequestConfig } from "axios";
import axios from "./axios";
export const getter = (url: any, configs?: AxiosRequestConfig) => {
  return axios.get(url, configs);
};
