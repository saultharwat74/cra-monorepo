import i18n from "i18next";
import { useMemo } from "react";
export const useCurrentLang = () => useMemo(() => i18n.language, [i18n]);
