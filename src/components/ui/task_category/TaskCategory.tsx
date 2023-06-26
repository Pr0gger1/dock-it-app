import styles from "./TaskCategory.module.scss";
import {ITaskCategory} from "../../../interfaces";
import React from "react";
import TaskContainer from "../containers/task_container/TaskContainer.tsx";
import AddTaskButton from "../buttons/AddTaskButton.tsx";

const TaskCategory = (category: ITaskCategory): React.JSX.Element => {
    return (
        <div className={styles.task_category}
        >
            <span className={styles.task_category__title}>
                {category.categoryName}
            </span>
            <TaskContainer tasks={[]}/>
            <AddTaskButton/>
        </div>
    );
};

export default TaskCategory;