import styles from "./styles/SearchBlock.module.scss";

const SearchBlock = () => {
    return (
        <div className={styles.search_container}>
            <input
                className={styles.search_container__input}
                type="text"
                placeholder="Search"
            />
        </div>
    );
};

export default SearchBlock;