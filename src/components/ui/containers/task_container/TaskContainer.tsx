import React from "react";
import styles from "./TaskContainer.module.scss";
import {ITaskCard, ITaskContainer} from "../../../../interfaces";
import TaskCard from "../../task_card/TaskCard.tsx";

const TaskContainer = ({tasks}: ITaskContainer): React.JSX.Element => {
    return (
        <div className={styles.task_container}>
            {
                tasks.map((task: ITaskCard, index: number) =>
                    <TaskCard
                        key={index}
                        description={task.description}
                    />
                )
            }
        </div>
    );
};

export default TaskContainer;