import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className="flex gap-2">
      <button
        onClick={() => i18n.changeLanguage("en")}
        className={i18n.language === "en" ? "font-bold" : ""}
      >
        EN
      </button>
      <button
        onClick={() => i18n.changeLanguage("es")}
        className={i18n.language === "es" ? "font-bold" : ""}
      >
        ES
      </button>
    </div>
  );
};

export default LanguageSwitcher;