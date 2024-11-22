
import { useDispatch, useSelector } from "react-redux";
import Task from "./Task";
import { useState } from "react";
import { addTask } from "../../store/taskSlice";

/* 
    TO DO: add filters for completed and pending tasks, important tasks
*/

const TaskList = () => {
    const dispatch = useDispatch();

    const [task, setTask] = useState({
        title: "",
        important: false
    })
    const handleTitleChange = (e) => {
        console.log(task)
        setTask({ ...task, [e.target.name]: e.target.value })
    }
    const handleCheckBoxChange = (e) => {
        console.log(task)
        setTask({ ...task, [e.target.name]: e.target.checked })
    }
    const tasks = useSelector((state) => state.tasks.tasks);


    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(addTask({
            ...task,
            id: tasks.length + 1
        }));
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label> Task</label>
                <input type="text" name="title" text={task.title} onChange={handleTitleChange} />
                <label>Important</label>
                <input type="checkbox" name="important" value={task.important} onChange={handleCheckBoxChange} />
                <button type="submit" onClick={handleSubmit}>Create Task</button>
            </form>
            {tasks && tasks.map((task) => <Task {...task} key={task.id}></Task>)}
        </>);
}

export default TaskList;