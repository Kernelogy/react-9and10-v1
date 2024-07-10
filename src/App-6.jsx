import { useEffect, useState } from "react"
import DisplayBoard from './components/DisplayBoard'

const App = () => {
    const [username, setUsername] = useState(null)
    return (
        <>
            <input type="text" placeholder="Enter u r name" 
            onInput={(e)=> {setUsername(e.target.value)}}/>

            {
                username && 
                <DisplayBoard username={username} />
            }
        </>
    )
}

export default App