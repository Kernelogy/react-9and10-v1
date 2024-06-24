import { useState } from "react"

const TaskList = ({tasks}) => {
    return (
        <>
            <h1>Task List</h1>
            {
                tasks && 
                tasks.map((e)=>{
                    return <Task task={e} />
                })
            }
        </>
    )
}

const Task = ({task}) => {
    const [isEditing, setIsEditing] = useState(false)
    let taskContent
    if(isEditing){
        taskContent = (
            <>
                <input type="text" value={task.title} 
                onInput={(e)=>{task.title = e.target.value}} />
                <input type="button" value="Save" 
                onClick={(e)=>setIsEditing(false)} />
            </>
        )
    }else{
        taskContent = (
            <>
                {task.title}
                <input type="button" value="Edit" 
                onClick={(e)=>setIsEditing(true)}/>
            </>
        )
    }
    return (
        <label>
            <input type="checkbox" checked={task.done} 
            onChange={(e)=>{task.done = e.target.checked}}/>
            {taskContent}
            <input type="button" value="Delete" /> <br/>
        </label>
    )
    
}

export default TaskList