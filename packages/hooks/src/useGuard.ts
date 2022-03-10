import { useRouter } from "./useRouter";
import { useEffect } from "react";

export const useGuard = (condition: Boolean, redirectURL: string) => {
  const { history } = useRouter();
  return useEffect(() => {
    // TODO: refactor use of histoy
    if (condition) history.push(redirectURL);
  }, [condition, history, redirectURL]);
};
