import styles from "./TaskContainer.module.scss";

const TaskContainer = (): JSX.Element => {
    return (
        <div className={styles.taskContainer}>
            <h1>Notes</h1>
        </div>
    );
};

export default TaskContainer;