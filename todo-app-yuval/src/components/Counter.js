import {React,useState} from 'react'
export default function Counter() {
    const [counter,setCounter] = useState(0);
    const incrementCounter = () =>{
        setCounter(counter+1)
    }
  return (
    <div onClick={incrementCounter}>{counter}</div>
  )
}


