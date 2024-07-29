const TodoList = ({todos, setState}) => {
    return (
        <>
            {
                todos &&
                todos.map((e)=>{
                    return <>
                        <label key={e.id}>                             
                            <input type="checkbox" checked={e.isCompleted} 
                            onChange={(evt)=>{setState(e.id)}}/>
                            {e.id}.{e.text}
                        </label> <br />                       
                    </>
                })
            }
        </>
    )
}

export default TodoList