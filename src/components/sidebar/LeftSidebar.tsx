import styles from "./LeftSidebar.module.scss";
import ThemeSwitcher from "../ui/theme_switcher/ThemeSwitcher.tsx";

const LeftSidebar = (): JSX.Element => {
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