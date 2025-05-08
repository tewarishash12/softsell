import { useEffect, useState } from "react";

const useDarkMode = () => {
    const [enabled, setEnabled] = useState(() => {
        const saved = localStorage.getItem("darkMode");
        return saved !== null ? JSON.parse(saved) : window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

    useEffect(() => {
        localStorage.setItem("darkMode", JSON.stringify(enabled));
        if (enabled) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [enabled]);

    return [enabled, setEnabled];
};

export default useDarkMode;