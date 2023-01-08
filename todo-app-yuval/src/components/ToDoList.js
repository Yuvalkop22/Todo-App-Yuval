import React from 'react'
import ToDoItem from './ToDoItem';
const todos = [{content: "go to the gym", isComplete: false},
    {content: "go to the mall",isComplete: false}]
export default function ToDoList() {
  return (
    <div>
        {todos.map((todo)=> <ToDoItem content={todo.content}/>)}
    </div>
  ) 
}
