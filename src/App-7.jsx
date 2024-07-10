import { useEffect, useState } from "react"

const Display = ({name}) => {
    useEffect(()=>{
        console.log("Loading...")
        return(()=>{
            console.log("Unloading...")
        })
    },[])
    return (
        <>
            <h1>Hi Welcome User {name}</h1>
        </>
    )
}

const App = () => {
    const [username, setUsername] = useState(null)
    return(
        <>
            <input type="text" placeholder="Type your name here..." 
            onInput={(e)=>{setUsername(e.target.value)}}/>
            {
                username &&
                <Display name={username} />
            }
        </>
    )
}

export default App