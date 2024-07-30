import { useState } from "react"

const TodoList = ({todos, setState, deleteTodo}) => {
    const [isEdit, setIsEdit] = useState(false)
    const [editId, setEditId] = useState(null)
    const changeEdit = (id) => {
        setIsEdit(!isEdit)
        setEditId(id)
    }
    let content = null
    if(!isEdit){
        content = (
            todos.map((e)=>{
                return <>
                    <label key={e.id}>                             
                        <input type="checkbox" checked={e.isCompleted} 
                        onChange={(evt)=>{setState(e.id)}}/>
                        {e.id}.{e.text}
                        <input type="button" value="Edit" 
                        onClick={(evt)=>{changeEdit(e.id)}} />
                        <input type="button" value="Delete" 
                         onClick={(evt)=>{deleteTodo(e.id)}}/>
                    </label> <br />                       
                </>
            })
        )
    }else{
        content = (
            todos.map((e)=>{
                if(e.id !== editId){
                    return <>
                    <label key={e.id}>                             
                        <input type="checkbox" checked={e.isCompleted} 
                        onChange={(evt)=>{setState(e.id)}}/>
                        {e.id}.{e.text}
                        <input type="button" value="Edit" 
                        onClick={(e)=>{changeEdit(e.id)}} />
                        <input type="button" value="Delete" 
                         onClick={(evt)=>{deleteTodo(e.id)}}/>
                    </label> <br />                       
                    </>
                }else{
                    return <>
                        <input type="text" value={e.text}/>
                        <input type="button" value="Save"/>
                    </>
                }

            })            
        )
    }
    return (
        <>
            {
                todos && !isEdit &&
                content                
            }
            {
                todos && isEdit &&
                content
            }
        </>
    )
}

export default TodoList