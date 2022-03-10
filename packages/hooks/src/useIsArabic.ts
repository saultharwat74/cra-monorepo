import { useRtlClass } from "./useRtlClass";

export const useIsArabic = () => Boolean(useRtlClass({ rtl: "true" }));
