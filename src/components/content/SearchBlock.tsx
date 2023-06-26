import styles from "./styles/SearchBlock.module.scss";
import React from "react";

const SearchBlock = (): React.JSX.Element => {
    return (
        <div className={styles.search_container}>
            <input
                className={styles.search_container__input}
                placeholder="Search"
                type="text"
            />
        </div>
    );
};

export default SearchBlock;