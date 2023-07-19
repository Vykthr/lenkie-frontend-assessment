import React from "react";
import Toggle from "react-toggle";
import { useColorScheme } from "../styles/useColorScheme";
import "react-toggle/style.css"

const DarkModeToggle = () => {
    const { isDark, setIsDark } = useColorScheme();
    
    return (
        <Toggle
            checked={isDark}
            onChange={({ target }) => setIsDark(target.checked)}
            icons={{ checked: "🌙", unchecked: "🔆" }}
        />
    );
};

export default DarkModeToggle;