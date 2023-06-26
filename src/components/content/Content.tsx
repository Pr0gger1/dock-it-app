import React from "react";
import SearchBlock from "./SearchBlock.tsx";
import TaskCategoryContainer from "../ui/containers/task_category_container/TaskCategoryContainer.tsx";
import {ITaskCategory} from "../../interfaces";

import styles from "./styles/Content.module.scss";

const Content = (): React.JSX.Element => {
    const categories: ITaskCategory[] = [
        {categoryName: "Need to do", id: "unfulfilled"},
        {categoryName: "In process", id: "process"},
        {categoryName: "Done", id: "done"}
    ];

    return (
        <div className={styles.content}>
            <SearchBlock/>

            <div className={styles.content__wrapper}>
                <h1>Notes</h1>

                <TaskCategoryContainer
                    categories={categories}
                />
            </div>
        </div>
    );
};

export default Content;