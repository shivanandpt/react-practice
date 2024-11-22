import { Children, createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState('light');
    const toggleTheme = () => theme === 'dark' ? setTheme('light') : setTheme('dark');
    return (
        <ThemeContext.Provider value={{
            theme,
            toggleTheme
        }}>
            {children}

        </ThemeContext.Provider>
    )
        ;
}

export {
    ThemeContext,
    ThemeProvider
};