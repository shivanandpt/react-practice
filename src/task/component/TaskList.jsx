
import { useDispatch, useSelector } from "react-redux";
import Task from "./Task";
import { useReducer, useState } from "react";
import { addTask } from "../../store/taskSlice";

/* 
    TO DO: add filters for completed and pending tasks, important tasks
*/

const tasksReducer = (state, action) => {
    switch (action.type) {
        case 'addTask':
            return [...state, action.payload];
        case 'removeTask':
            return state.filter(it => it.id !== action.payload);
        case 'toggleTask':
            return state.map(task => task.id === action.payload ? { ...task, completed: !task.completed } : task)
        default:
            throw new Error("Unknown action");
    }
};

const TaskList = () => {
    const [tasks, dispatch] = useReducer(tasksReducer, [
        {
            "id": 1,
            "title": "Buy groceries",
            "completed": false,
            "important": true
        },
        {
            "id": 2,
            "title": "Complete React project",
            "completed": true,
            "important": true
        },
        {
            "id": 3,
            "title": "Call the plumber",
            "completed": false,
            "important": false
        },
        {
            "id": 4,
            "title": "Prepare for the meeting",
            "completed": true,
            "important": false
        },
        {
            "id": 5,
            "title": "Workout for 30 minutes",
            "completed": false,
            "important": true
        },
        {
            "id": 6,
            "title": "Pay electricity bill",
            "completed": false,
            "important": false
        },
        {
            "id": 7,
            "title": "Read a book",
            "completed": true,
            "important": true
        },
        {
            "id": 8,
            "title": "Schedule dentist appointment",
            "completed": false,
            "important": false
        }
    ]
    );

    const [task, setTask] = useState({
        title: "",
        important: false
    })
    const handleTitleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value })
    }
    const handleCheckBoxChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.checked })
    }
    // const tasks = useSelector((state) => state.tasks.tasks);


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'addTask',
            payload: {
                ...task,
                id: tasks.length + 1
            }
        });
    };

    const handleTaskToggle = (id) => {
        dispatch({
            type: 'toggleTask',
            payload: id
        });
    }
    const handleDelete = (id) => {
        dispatch({
            type: 'removeTask',
            payload: id
        });
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
            {tasks && tasks.map((task) =>
                <div className={`task ${task.completed ? "completed-task" : ""}`} key={task.id}>
                    <div className="task-text" onClick={() => handleTaskToggle(task.id)}>
                        <h3>{task.important ? `* ${task.title}` : `${task.title}`}</h3>
                    </div>
                    <div className="task-delete" onClick={() => handleDelete(task.id)}>
                        <span className="delete-icon">🗑️</span>
                    </div>
                </div >
            )
            }
        </>);
}

export default TaskList;