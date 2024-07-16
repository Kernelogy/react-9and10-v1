import { useEffect } from "react"

const Todos = ({todos}) => {
    useEffect(()=>{
        console.log("Child Loading....")
    })
    return (
        <>
            <ul>
            {                
                todos.map((e)=>{
                    return <li>
                        {e}
                    </li>
                })
            }
            </ul>
        </>
    )
}

export default Todos