import { useEffect, useRef, useState } from "react"

const App = () => {
    const count = useRef(0)
    useEffect(()=>{
        console.log("Rerendering...")
        count.current = count.current + 1
    })
    const [text, setText] = useState(null)
    return (
        <>
            <input type="text" placeholder="Type Something..." 
            onInput={(e)=>{setText(e.target.value)}}/>
            {
                text && count &&
                <>
                <p>{text}</p>
                <p>The number of rerendering {count.current}</p>
                </>
            }
        </>
    )
}

export default App