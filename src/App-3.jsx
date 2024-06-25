import { useState } from "react"

const App = () => {
    const [list, setList] = useState([]) 
    const [text, setText] = useState(null)
    const addToList = () => {
        setList([...list, text])
    }
    const deleteFromList = (txt) =>{
        setList(
            list.filter((e)=>{
                if(e !== txt){
                    return e
                }
            })
        )
    }   
    return (
        <>
             <input type="text" placeholder="Enter Something"
             onInput={(e)=>{setText(e.target.value)}}/>
             <input type="button" value="Add" 
             onClick={(e)=>{addToList()}}/>
             {
                list && 
                list.map((e)=>{
                    return <p>
                        {e}
                        <input type="button" value="x" 
                        onClick={(ev)=>{deleteFromList(e)}}/>
                    </p>
                })

             }
        </>
    )
}

export default App