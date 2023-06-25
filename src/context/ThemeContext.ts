import React, {createContext, SetStateAction} from "react";
import {Theme} from "../types";

interface IThemeContext {
    currentTheme: Theme,
    setCurrentTheme: React.Dispatch<SetStateAction<Theme>>,
    toggleTheme: () => void
}

export default createContext<IThemeContext>({
    currentTheme: localStorage.getItem("theme") as Theme || "light",
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setCurrentTheme: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    toggleTheme: () => {}
});