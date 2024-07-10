import { useState } from "react"

const App = () => {
    const [car, setCar] = useState(null)
    const handler = (e) => {
        setCar({...car, [e.target.name]: e.target.value})
        console.log(car)
    }
    return (
        <>
            <h1>Provide Your Car Details</h1>
            <label>
                Make <input name="make" type="text"
                onInput={(e)=>{handler(e)}}/>
            </label><br />
            <label>
                Year <input name="year" type="text"
                onInput={(e)=>{handler(e)}}/>
            </label><br />
            <label>
                Model <input name="model" type="text"
                onInput={(e)=>{handler(e)}}/>
            </label><br />
            <label>
                Color <input name="color" type="text"
                onInput={(e)=>{handler(e)}}/>
            </label><br />
                {
                   
                    <div>
                        <h1>The Given details are</h1>
                        {
                            car &&
                            <>
                            <p>{car.make}</p>
                            <p>{car.year}</p>
                            <p>{car.model}</p>
                            <p>{car.color}</p>
                            </>
                        }
                    </div>

                }
        </>
    )
}

export default App