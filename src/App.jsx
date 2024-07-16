import { useEffect, useState } from 'react'
import Todos from './components/Todos'

const App = () => {
    useEffect(()=>{
        console.log("Parent Loading....")
    })
    const [todos, setTodos] = useState([
        "Todo 1",
        "Todo 2",
        "Todo 3"
    ])
    const addTodo = () => {
        setTodos([...todos, "New Todo"])
    }
    return (
        <>
            <input type="button" value="Add" onClick={()=> {addTodo()}} />
            <Todos todos={todos} />
        </>
    )
}

export default App