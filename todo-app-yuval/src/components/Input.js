import React from 'react'
import '../App.css';
export default function Input(props) {
    const AddToDo = () => {
        if (props.todoValue <= 0)
            return;
        const newToDo = {
            content: props.todoValue,
            isComplete: false,
            id: props.todos.length+1
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
