import { useContext } from "react";
import { LocalizationContext } from "../../localization/LocalizationContext";

const LanguageToggelButton = () => {
    const { language, switchLanguage, translations } = useContext(LocalizationContext)
    return (
        <button className="swith-language" onClick={switchLanguage}>
            {translations.switchLang}
        </button>);
}

export default LanguageToggelButton;