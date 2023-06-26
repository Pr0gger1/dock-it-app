import React from "react";
import ThemeSwitcher from "../ui/theme_switcher/ThemeSwitcher.tsx";
import styles from "./LeftSidebar.module.scss";

const LeftSidebar = (): React.JSX.Element => {
    return (
        <aside id={styles["left-sidebar"]}>
            <h2 className={styles.logo}>
                DockIt
            </h2>

            <ThemeSwitcher/>
        </aside>
    );
};

export default LeftSidebar;