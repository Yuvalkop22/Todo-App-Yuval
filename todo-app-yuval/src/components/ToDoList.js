import {React} from 'react'
import TodoItem from './ToDoItem';
import '../App.css';
export default function ToDoList(props) {
    const AddToDo = () => {
        const newToDo = {
            content: props.todoValue,
            isComplete: false,
            id: props.todos.length+1
        };
        props.setTodos([...props.todos,newToDo]);
        props.setActiveTodos(props.activeTodos+1);
    }
    const clearAllCompleted = () => {
        props.setTodos(props.todos.filter((todo)=> todo.isComplete !== true));
        props.setCompletedTodos(0);
    }
    return (
    <div>
      <div className="inputDiv">
        <input type="text" 
            placeholder="Create a new todo..." 
            onChange={(e)=>props.setTodoValue(e.target.value)}/>
        <button onClick={AddToDo}>Add todo</button>
      </div>
      {
        props.todos.map((todo)=>
            <TodoItem todos={props.todos} 
                    activeTodos={props.activeTodos}
                    setActiveTodos={props.setActiveTodos} 
                    completedTodos={props.completedTodos}
                    setCompletedTodos={props.setCompletedTodos}
                    id={todo.id} 
                    key={todo.id} 
                    setTodos={props.setTodos} 
                    todo={todo}/>
            )
        }
      <h3>Total Active todos = {props.activeTodos}</h3>
      <h3>Total Completed todos = {props.completedTodos}</h3>
      <button onClick={clearAllCompleted}>Clear all completed todos</button>
    </div>
  )
}
