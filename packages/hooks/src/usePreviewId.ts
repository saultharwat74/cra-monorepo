import { useState, useEffect } from "react";

export const usePreviewId = () => {
  const [previewId, setPreviewId] = useState("");

  useEffect(() => {
    if (!window) setPreviewId("");
    const baseURLSplitted = window.location.href.split("/");
    const preview_id = baseURLSplitted[baseURLSplitted.indexOf("#") + 1];

    if (!previewId) setPreviewId(preview_id);
  }, [window]);

  return previewId;
};
