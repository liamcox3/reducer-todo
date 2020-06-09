import React from "react";

function Todoitem(props) {
    return (
        <div className='Todoitems'>
            <li>{props.taskData.todo}</li>
        </div>
    );
}

export default Todoitem;
