import React from 'react'

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
    const changeActivation = () => {
        props.todo.isComplete = !props.todo.isComplete;
        if (props.todo.isComplete === false){
            props.setActiveTodos(props.activeTodos+1);
            props.setCompletedTodos(props.completedTodos-1)
        }else{
            props.setCompletedTodos(props.completedTodos+1);
            props.setActiveTodos(props.activeTodos-1);
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
