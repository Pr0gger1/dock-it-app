import styles from "./styles/AddCardButton.module.scss";

const AddCardButton = (): JSX.Element => {
    return (
        <button className={styles.addCard__button}
            name="add-card__btn"
        >
            +
        </button>
    );
};

export default AddCardButton;