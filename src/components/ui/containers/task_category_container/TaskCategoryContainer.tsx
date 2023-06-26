import TaskCategory from "../../task_category/TaskCategory.tsx";
import {ICategoryContainer, ITaskCategory} from "../../../../interfaces";

import styles from "./TaskCategoryContainer.module.scss";
import React from "react";

const TaskCategoryContainer = ({categories}: ICategoryContainer): React.JSX.Element => {
    return (
        <div className={styles.task_category__container}>
            {
                categories.map((category: ITaskCategory) =>
                    <TaskCategory
                        key={category.id}
                        id={category.id}
                        categoryName={category.categoryName}
                    />
                )
            }
        </div>
    );
};

export default TaskCategoryContainer;