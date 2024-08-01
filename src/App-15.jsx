import { useRef, useState } from "react"
import TodoList from "./components/TodoList"

const App = () => {
    const [todos, setTodos] = useState([])
    const [text, setText] = useState("")
    const count = useRef(0)
    const addTodo = () =>{
        count.current = count.current + 1
        const todo = {
            id: count.current,
            text: text,
            isCompleted: false
        }
        setTodos([...todos, todo])
        console.log(todos)
    }
    const setState = (id) => {
        setTodos(
            todos.map((e)=>{
                if(e.id === id){
                    console.log(e)
                    return { ...e, isCompleted: !e.isCompleted }
                }else{
                    return e
                }
            })
        )
    }
    const deleteTodo = (id) => {
        setTodos(
            todos.filter((e)=>{
                return e.id !== id
            })
        )
    }
    const editText = (todo) => {
        setTodos(
            todos.map((e)=>{
                if(e.id === todo.id){
                    return { ...e, text: todo.text }
                }else{
                    return e
                }
            })
        )        
    }
    return (
        <>   
            <input type="text" placeholder="Type your Todo..." 
            onInput={(e)=>setText(e.target.value)}/>

            <input type="button" value="Add" 
            onClick={(e)=>{addTodo()}}/>

            <h1>My Todo List</h1>
            <TodoList todos={todos} 
            setState={setState} 
            deleteTodo={deleteTodo} 
            editText={editText}/>

        </>
    )
}

export default App