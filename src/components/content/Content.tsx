import styles from "./styles/Content.module.scss";
import TaskContainer from "../ui/containers/task_container/TaskContainer.tsx";
import SearchBlock from "./SearchBlock.tsx";

const Content = (): JSX.Element => {
    return (
        <div className={styles.content}>
            <SearchBlock/>
            <TaskContainer/>
        </div>
    );
};

export default Content;