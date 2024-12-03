import { useTranslation, i18n } from "next-i18next";
// utils
import { useRouter } from "next/router";
import localStorageAvailable from "@/utils/localStorageAvailable";
//
import { allLangs, defaultLang } from "./config-lang";

// ----------------------------------------------------------------------

export default function useLocales(namespaces = ["common"]) {
  const { t } = useTranslation(namespaces);

  const storageAvailable = localStorageAvailable();

  const langStorage = storageAvailable
    ? localStorage.getItem("i18nextLng")
    : i18n?.language;

  const currentLang =
    allLangs.find((_lang) => _lang.value === langStorage) || defaultLang;

  const router = useRouter();

  const { pathname, asPath, query } = router;

  const handleChangeLanguage = (newlang: string) => {
    if (!newlang) return;
    // i18n.changeLanguage(newlang);
    localStorage.setItem("i18nextLng", newlang);
    router.push({ pathname, query }, asPath, { locale: newlang });
  };

  return {
    onChangeLang: handleChangeLanguage,
    t: (text: string, options?: any) => t(text, options) as string,
    currentLang,
    allLangs,
  };
}
