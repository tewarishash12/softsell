import React, { createContext, useContext, useState, useEffect } from "react";

// Create the context
const ThemeContext = createContext();

// Provider component
export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(() => {
        // Check localStorage or default to system preference
        const saved = localStorage.getItem("darkMode");
        return saved !== null ? JSON.parse(saved) : window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

    useEffect(() => {
        // Update localStorage and document class
        localStorage.setItem("darkMode", JSON.stringify(darkMode));
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    const toggleDarkMode = () => setDarkMode((prev) => !prev);

    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook to access context
export const useTheme = () => useContext(ThemeContext);