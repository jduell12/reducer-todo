import React from 'react';
import ToDo from './ToDo';

function ToDoList(props) {
    return(
        <ul>
            {props.list.map(item => (
                <ToDo key={item.id+1}  id ={item.id} task={item.item} completed={item.completed} checkOffTask={props.completeTask}/>
            ))}
        </ul>
    )
}

export default ToDoList;