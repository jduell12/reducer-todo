import React from 'react';

const ToDoForm = (props) => {
    const {input, handleChange, dispatch, list} = props;
    return(
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                dispatch({type: 'ADD_NEW_TASK', payload: input})
                props.changeTask('')
                }}>
                <input 
                    type="text"
                    placeholder="Item to do"
                    value={input}
                    onChange={handleChange}
                />
                <button>Add Task</button>
            </form>
        </div>
    )
}

export default ToDoForm;