import { useEffect } from "react"
const DisplayBoard = ({username}) => {
    useEffect(()=>{
        console.log("Loading...")
        return(()=>{
            console.log("Unloading...")
        })
    },[])//list the variables here the useEffect is to watch
    useEffect(()=>{
        console.log("Loading...")
        return(()=>{
            console.log("Unloading...")
        })
    },[username])
    return (
        <>
            {
                username && 
                <p>Welcome {username}!</p>
            }
        </>
    )
}

export default DisplayBoard