import React, { useState, useReducer } from "react";
import Todoitem from "./Todoitem";

function Todopage() {
    let [taskData, setTaskData] = useState([
        {
            todo: "",
            incompleted: true,
        },
    ]);

    let addNewTask = (task) => {
        let newTask = {
            todo: taskData.todo,
            incompleted: taskData.incompleted,
        };
        setTaskData([...taskData, newTask]);
    };

    const handleChanges = (e) => {
        setTaskData({ todo: e.target.value });
    };

    return (
        <div className='Todopage'>
            <form>
                <label htmlFor='todo'>
                    <input
                        type='text'
                        name='todo'
                        placeholder='...todo'
                        value={taskData.todo}
                        onChange={handleChanges}
                    />
                </label>
            </form>
            <button type='submit'>Add Task</button>
            <button>Clear Task</button>
            <Todoitem taskData={taskData} />
        </div>
    );
}

export default Todopage;
