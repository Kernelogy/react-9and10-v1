import { useReducer, useRef, useState } from "react"
import TodoList from "./components/TodoList"

const App = () => {
    const count = useRef(0)
    const [text, setText] = useState("")

    const reducer = (state, action)=>{
        console.log("State", state)
        console.log("Action", action)
        switch(action.type){
            case "ADD":
                count.current = count.current + 1
                const todo = {
                    id: count.current,
                    text: action.text,
                    isCompleted: false
                }
                return [...state, todo] 
            case "EDIT":
                return state               
            case "DELETE":
                return state
            case "COMPLETE":
                return state
            default:
                return null
        }
    }
    const [todos, dispatch] = useReducer(reducer, []);

    return (
        <>   
            <input type="text" placeholder="Type your Todo..." 
            onInput={(e)=>setText(e.target.value)}/>

            <input type="button" value="Add" 
            onClick={(e)=>{
                dispatch({type: "ADD", text: text})
            }}/>

            <h1>My Todo List</h1>
            <TodoList todos={todos} 
            />

        </>
    )
}

export default App