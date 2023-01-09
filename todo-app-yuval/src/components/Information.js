import React from 'react'

export default function Information(props) {
      const clearAllCompleted = () => {
        props.setTodos(props.todos.filter((todo)=> todo.isComplete !== true));
        props.setCompletedTodos(0);
    }
    return (
    <div className={`infoDiv-${props.mode}`}>
        <label>Active {props.activeTodos}</label>
        <label> | </label>
        <label>Completed {props.completedTodos}</label>
        <label> | </label>
        <button className={`btnClearAll-${props.mode}`}onClick={clearAllCompleted}>Clear all completed</button>
    </div>
  )
}
