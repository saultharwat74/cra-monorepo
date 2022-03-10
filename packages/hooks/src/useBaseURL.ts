import { useEffect, useState } from "react";

export const useBaseURL = () => {
  const [baseURL, setBaseURL] = useState("");

  useEffect(() => {
    if (!window) return;
    const { href } = window.location;
    const splittedString = href.split("/");
    const indexOfHash = splittedString.indexOf("#");
    const formattedBaseURL = splittedString.slice(0, indexOfHash + 2).join("/");

    setBaseURL(formattedBaseURL);
  }, [window]);

  return baseURL;
};
