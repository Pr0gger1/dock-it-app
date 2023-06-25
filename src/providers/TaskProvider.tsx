import {FC} from "react";
import {ChildrenProps} from "../types";
import TaskContext from "../context/TaskContext.ts";

const TaskProvider: FC<ChildrenProps> = ({children}): JSX.Element => {
    return (
        <TaskContext.Provider value={{}}>
            {children}
        </TaskContext.Provider>
    );
};

export default TaskProvider;