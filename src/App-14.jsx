import { useRef, useState } from "react"
/*
const App = () => {
    const [text, setText] = useState(null)
    const getText = () => {
        alert(text)
    }
    return(
        <>
            <input type="text" placeholder="Type Something" 
            onInput={(e)=>{setText(e.target.value)}}/>

            <input type="button" value="Get Text" 
            onClick={(e)=>{getText()}}/>
        </>
    )
}
*/

const App = () => {
    const text = useRef("")
    const getText = () => {
        console.log(text.current.value)
        alert(text.current.value)
    }
    return(
        <>
            <input type="text" placeholder="Type Something" ref={text}/>

            <input type="button" value="Get Text" 
            onClick={(e)=>{getText()}}/>
        </>
    )
}

export default App