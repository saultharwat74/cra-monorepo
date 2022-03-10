import axios, { AxiosError, AxiosResponse } from "axios";
const handleSuccess = (
  res: AxiosResponse
): AxiosResponse | Promise<AxiosResponse> => res;
const handleError = (error: AxiosError) => {
  throw error;
};

export const createAxiosInstance = (baseURL: string) => {
  const instance = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });
  instance.interceptors.response.use(handleSuccess, handleError);
  return instance;
};

export default createAxiosInstance(
  "default base url"
);
