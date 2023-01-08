import {React,useState}from 'react';
import TodoList from './components/TodoList';
const App = () => {
  const [todoValue,setTodoValue] = useState("");
  const [todos,setTodos] = useState([]);
  const [activeTodos,setActiveTodos] = useState(0);
  return(
    <div>
      <TodoList 
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        todos={todos}
        setTodos={setTodos}
        activeTodos={activeTodos}
        setActiveTodos={setActiveTodos}
        />  
    </div>
  )
}
export default App;