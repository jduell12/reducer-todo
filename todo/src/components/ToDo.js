import React from 'react';

const ToDo = props => {
    const {id, task, completed, checkOffTask} = props;
    return(
        <li
            className={`task${completed}`}
            onClick={() => checkOffTask(id)}
        >
            {task} 
        </li>
    )
}

export default ToDo;