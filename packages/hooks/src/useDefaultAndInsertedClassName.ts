import { useMemo } from "react";

const useDefaultAndInsertedClassName = (
  defaultClassName: string,
  insertedClassName?: string
) => {
  return useMemo(
    () => `${defaultClassName} ${insertedClassName || ""}`,
    [defaultClassName, insertedClassName]
  );
};

export {
  useDefaultAndInsertedClassName,
  useDefaultAndInsertedClassName as uDIC,
};
