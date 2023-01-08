import {React,useState} from 'react'
import ToDoItem from './ToDoItem';
export default function ToDoList() {
    const [todos,setTodos] = useState([]);
    const onAddTodo = () => {
        const newTodo = {content: "go to the dev club",isComplete: false};
        setTodos([...todos,newTodo]);
    }

    return (
        <div>
            {todos.map((todo)=> <ToDoItem content={todo.content}/>)}
            <button onClick={onAddTodo}>+</button>
        </div>
    ) 
}
