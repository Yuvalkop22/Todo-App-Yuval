import {React,useState}from 'react';
import TodoList from './components/ToDoList';
import Input from './components/Input';
import './App.css';
const App = () => {
  const [todoValue,setTodoValue] = useState("");
  const [todos,setTodos] = useState([]);
  const [activeTodos,setActiveTodos] = useState(0);
  const [completedTodos,setCompletedTodos] = useState(0);
  const [mode,setMode] = useState('light');
  const [btnModeTitle,setBtnModeTitle] = useState('Dark Mode');
  const changeMode = () =>{
    if (mode === 'light'){
      setMode('dark')
      setBtnModeTitle('Light Mode')
    }else{
      setMode('light')
      setBtnModeTitle('Dark Mode')
    }
  }
  return(
    <div>
      <div className={`header-${mode}`}>
        <h3 className={`headerText-${mode}`}>My To-Do List</h3>
        <button onClick={changeMode} className="toggleBtn">{btnModeTitle}</button>
      </div>
      <Input 
        mode={mode}
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        todos={todos}
        setTodos={setTodos}
        activeTodos={activeTodos}
        setActiveTodos={setActiveTodos}
        completedTodos={completedTodos}
        setCompletedTodos={setCompletedTodos}
        />
      <TodoList 
        mode={mode}
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        todos={todos}
        setTodos={setTodos}
        activeTodos={activeTodos}
        setActiveTodos={setActiveTodos}
        completedTodos={completedTodos}
        setCompletedTodos={setCompletedTodos}
        />   
    </div>
  )
}
export default App;