import { useDispatch } from "react-redux";
import { toggleTask, removeTask } from "../../store/taskSlice";

const Task = ({ id, title, completed, important }) => {
    const dispatch = useDispatch();

    const handleTaskToggle = (id) => {
        dispatch(toggleTask(id));
    }

    const handleDelete = (id) => {
        dispatch(removeTask(id))
    }
    return (
        <>
            <div className={`task ${completed ? "completed-task" : ""}`}>
                <div className="task-text" onClick={() => handleTaskToggle(id)}>
                    <h3>{important ? `* ${title}` : `${title}`}</h3>
                </div>
                <div className="task-delete" onClick={() => handleDelete(id)}>
                    <span className="delete-icon">🗑️</span>
                </div>
            </div>
        </>

    );
}

export default Task;