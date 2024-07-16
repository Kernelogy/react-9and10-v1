import { useState, useEffect } from 'react'
import StyleComponent from './components/StyleComponent'
import SimpleComponent from './components/SimpleComponent'

const App = () => {
    useEffect(()=>{
        console.log("Parent Loading...")
    })
    const [text, setText] = useState(null)
    return (
        <>
            <input type="text" placeholder='Type Something'
            onInput={(e)=>{setText(e.target.value)}}/> <br />
            <div>
                {
                    text && 
                    <>
                        {text}
                    </>
                }
            </div>
            <SimpleComponent />
        </>
    )
}

export default App