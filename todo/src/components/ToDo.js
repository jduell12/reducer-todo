import React from 'react';

const ToDo = props => {
    const {dispatch} = props;
    return(
        <li
           onClick={() => dispatch({type: "COMPLETE_TASK"})}
        >
            {props.task} 
        </li>
    )
}

export default ToDo;