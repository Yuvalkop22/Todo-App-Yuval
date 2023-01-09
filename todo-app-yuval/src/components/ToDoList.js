import {React} from 'react'
import TodoItem from './ToDoItem';
import Information from './Information';
import '../App.css';
export default function ToDoList(props) {
    return (
    <div>
      <div className="todosList">
        {
          props.todos.map((todo)=>
              <TodoItem 
                      mode={props.mode}
                      todos={props.todos} 
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
      </div>
      <div>
        <Information
          mode={props.mode} 
          activeTodos={props.activeTodos}
          setActiveTodos={props.setActiveTodos} 
          completedTodos={props.completedTodos}
          setCompletedTodos={props.setCompletedTodos}
          setTodos={props.setTodos}
          todos={props.todos} 
        />
      </div>
    </div>
  )
}
