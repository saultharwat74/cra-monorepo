import * as React from "react";
import i18n from "i18next";
export const getRtlClass = (stylesModule: any) => {
  const isRtl = i18n.language === "ar";
  const rtlClass = stylesModule.rtl;
  const hasRtlClass = !!stylesModule.rtl;
  const shouldReturnRtlClass = isRtl && hasRtlClass;
  return shouldReturnRtlClass ? rtlClass : "";
};

export const useRtlClass = (
  stylesModule: { [x: string]: string } = { rtl: "rtl" }
) => React.useMemo(() => getRtlClass(stylesModule), [i18n.language]);
