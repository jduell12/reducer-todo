import React, {useState, useReducer} from 'react';
import ToDoList from './ToDoList';
import {initialState, reducer} from '../reducers/reducer'
import '../styles/App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [toDoList, addItem] = useState([initialState]);

  return (
   <div className="App">
     <h1>Reducer To Do List:</h1>
     <ToDoList list={toDoList} dispatch={dispatch} taskState={state}/>
   </div>
  );
}

export default App;
