import { useState } from "react"

const App = () => {
    const [make, setMake] = useState(null)
    const [year, setYear] = useState(null)
    const [model, setModel] = useState(null)
    const [color, setColor] = useState(null)
    return (
        <>
            <h1>Provide Your Car Details</h1>
            <label>
                Make <input type="text" 
                onInput={(e)=>{setMake(e.target.value)}}/>
            </label><br />
            <label>
                Year <input type="text" 
                onInput={(e)=>{setYear(e.target.value)}}/>
            </label><br />
            <label>
                Model <input type="text" 
                onInput={(e)=>{setModel(e.target.value)}}/>
            </label><br />
            <label>
                Color <input type="text" 
                onInput={(e)=>{setColor(e.target.value)}}/>
            </label><br />
                {
                    make && year && model && color &&
                    <div>
                        <h1>The Given details are</h1>
                        {make} {year} {model} {color}
                    </div>

                }
        </>
    )
}

export default App