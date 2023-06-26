import React from "react";
import {ITaskCard} from "../../../interfaces";
import styles from "./TaskCard.module.scss";

const TaskCard = ({description}: ITaskCard): React.JSX.Element => {
    return (
        <div className={styles.taskCard} draggable>
            <p className={styles.task_description}>
                {description}
            </p>
        </div>
    );
};

export default TaskCard;