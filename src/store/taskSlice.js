import { createSlice } from "@reduxjs/toolkit";


const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [
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
    },
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },

        toggleTask:(state, action) => {
            const task = state.tasks.find((it) => it.id === action.payload)
            if (task) {
                task.completed = !task.completed;
            }
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter((it) => it.id !== action.payload)
    
        }
    }
});

export const { addTask, toggleTask, removeTask} = taskSlice.actions;
export default taskSlice.reducer;