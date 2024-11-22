import { createContext, useState } from "react";

const translations = {
    en: {
        title: "Task App",
        switchLang: "Switch Language",
        addTask: "Add Task",
        darkMode: "Dark Mode",
        lightMode: "Light Mode", // New translation
      },
      es: {
        title: "Aplicación de Tareas",
        switchLang: "Cambiar Idioma",
        addTask: "Agregar Tarea",
        darkMode: "Modo Oscuro",
        lightMode: "Modo Claro", // New translation
      },
};

const LocalizationContext = createContext();

const LocalizationProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');
    const switchLanguage = () => setLanguage(language === 'en' ? 'es' : 'en')
    return (
        <LocalizationContext.Provider value={{
            language,
            switchLanguage,
            translations: translations[language]
        }}>
            {children}
        </LocalizationContext.Provider>
    )
}
export {
    LocalizationContext,
    LocalizationProvider
}