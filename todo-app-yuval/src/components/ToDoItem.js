import React from 'react'
import "../App.css"
export default function ToDoItem(props) {
    const deleteToDo = () => {
        props.todos.map((todo)=>{
            if (todo.id === props.id){
                if (props.todo.isComplete === false){
                    props.setActiveTodos(props.activeTodos-1);
                }else{
                    props.setCompletedTodos(props.completedTodos-1);
                }
                return false;
            }
            return true;
        });
        props.setTodos(props.todos.filter((todo) => todo.id !== props.id))
    }
    let label = document.querySelector('label');
    const changeActivation = () => {
        props.todo.isComplete = !props.todo.isComplete;
        if (props.todo.isComplete === false){
            props.setActiveTodos(props.activeTodos+1);
            props.setCompletedTodos(props.completedTodos-1)
            label.setAttribute('style','text-decoration: none')
        }else{
            props.setCompletedTodos(props.completedTodos+1);
            props.setActiveTodos(props.activeTodos-1);
            label.setAttribute('style','text-decoration: line-through;')
        }
    }
  return (
    <div>
      <input type="checkbox" onChange={changeActivation}/>
      <label>{props.todo.content}</label>
      <button onClick={deleteToDo}>Delete to do</button>
    </div>
  )
}
