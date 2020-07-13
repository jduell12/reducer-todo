import React from 'react';

const ToDoForm = (props) => {
    const {input, handleChange} = props;
    return(
        <form>
            <input 
                type="text"
                placeholder="Item to do"
                value={input}
                onChange={handleChange}
            />
        </form>
    )
}

export default ToDoForm;