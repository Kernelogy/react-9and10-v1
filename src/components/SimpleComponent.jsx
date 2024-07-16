import { useEffect, memo } from "react"

const SimpleComponent = () => {
    useEffect(()=>{
        console.log("Child Loading...")
    })
    return (
        <>
            <h1>Hello World</h1>
        </>
    )
}
export default memo(SimpleComponent)