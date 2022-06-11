import languageSelectors from "../store/selectors/languageSelector";
import { languageActions } from "../store/slices/languageSlice";
import { useCallback, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

const getLabelLanguage = (language, locale) => {
  const options = [
    {
      locale: "vi",
      vi: "Tiếng Việt",
      en: "Tiếng Anh",
    },
    {
      locale: "en",
      vi: "Vietnamese",
      en: "English",
    },
  ];

  return options.find(({ locale }) => locale === language.locale)[locale];
};

const useLanguage = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const language = useSelector(languageSelectors.selectLanguage);
  const languages = useMemo(
    () => [
      {
        label: getLabelLanguage(language, "vi"),
        locale: "vi",
        flag: "VN",
      },
      {
        label: getLabelLanguage(language, "en"),
        locale: "en",
        flag: "US",
      },
    ],
    [language]
  );

  const handleLanguageChange = useCallback(
    (language) => {
      dispatch(languageActions.setLanguage(language));
    },
    [dispatch]
  );

  useEffect(() => {
    setTimeout(() => {
      i18n.changeLanguage(language.locale);
    }, 100);
  }, [language, i18n]);

  return {
    t,
    language,
    languages,
    handleLanguageChange,
  };
};

export default useLanguage;
