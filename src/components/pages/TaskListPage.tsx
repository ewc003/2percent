import { useParams } from "react-router-dom";

const TaskListPage = () => {
    const { listId } = useParams(); 

    return (
        <div>TaskListPage: {listId}</div>
    )
}

export default TaskListPage;