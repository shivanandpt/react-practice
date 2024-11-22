import { useContext } from "react";
import { ThemeContext } from "../../themes/ThemeContext";
import { LocalizationContext } from "../../localization/LocalizationContext";
const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { translations } = useContext(LocalizationContext)
    return (
        <button className="theme-button" onClick={toggleTheme}>
            {theme === 'light' ? translations.darkMode : translations.lightMode}
        </button>
    );
}

export default ThemeToggleButton;