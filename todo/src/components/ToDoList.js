import React from 'react';
import ToDo from './ToDo';

function ToDoList(props) {
    return(
        <ul>
            {props.list.map(item => (
                <ToDo key={item.id} task={item.item} completeTask={item.completed} dispatch={props.dispatch} taskState={props.taskState}/>
            ))}
        </ul>
    )
}

export default ToDoList;