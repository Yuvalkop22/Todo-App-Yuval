import React from 'react'
import '../App.css';
import { v4 as uuidv4 } from 'uuid';
export default function Input(props) {
    const AddToDo = () => {
        if (props.todoValue <= 0)
            return;
        const id = uuidv4();
        const newToDo = {
            content: props.todoValue,
            isComplete: false,
            id: id
        };
        props.setTodos([...props.todos,newToDo]);
        props.setActiveTodos(props.activeTodos+1);
    }
  return (
      <div className="inputDiv">
        <input
            className={`inputField-${props.mode}`}
            type="text" 
            placeholder="Create a new todo..." 
            onChange={(e)=>props.setTodoValue(e.target.value)}/>
        <button
            className={`btnTodo-${props.mode}`}
            onClick={AddToDo}>Add todo</button>
      </div>
  )
}
