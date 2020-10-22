import React, {useState, useReducer} from 'react';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import {initialState, reducer} from '../reducers/reducer';
import '../styles/App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newTask, changeTask] = useState("");

  const handleChange = e => {
    changeTask(e.target.value);
  }

  const completeTask = (id) => {
    dispatch({type: 'COMPLETE_TASK', payload: id})
  }

  const filterComplete = () => {
    dispatch({type: 'FILTER_COMPLETE'})
  }

  return (
   <div className="App">
     <h1>Reducer To Do List:</h1>
     <button onClick={filterComplete}>Clear Completed Tasks</button>
     <ToDoList 
        list={state} 
        completeTask={completeTask}
      />
      <ToDoForm 
          input={newTask}
          handleChange={handleChange}
          dispatch={dispatch}
          changeTask={changeTask}
      />
   </div>
  );
}

export default App;
