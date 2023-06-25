import {FC, useEffect, useState} from "react";
import ThemeContext from "../context/ThemeContext.ts";
import {ChildrenProps, Theme} from "../types";


const ThemeProvider: FC<ChildrenProps> = ({children}): JSX.Element => {
    const [currentTheme, setCurrentTheme] = useState<Theme>(
        localStorage.getItem("theme") as Theme || "light"
    );

    useEffect(() => {
        localStorage.setItem("theme", currentTheme);
    }, [currentTheme]);

    const toggleTheme = () => {
        setCurrentTheme(prevState => prevState == "light" ?
            "dark" : "light"
        );
    };


    return (
        <ThemeContext.Provider value={{
            currentTheme, setCurrentTheme, toggleTheme
        }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;