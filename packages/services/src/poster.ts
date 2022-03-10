import { AxiosRequestConfig } from "axios";
import axios from "./axios";

export const poster = (url: string, data: any, config?: AxiosRequestConfig) => {
  return axios.post(url, data, config);
};
