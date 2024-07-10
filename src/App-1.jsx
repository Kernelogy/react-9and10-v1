import { useState } from "react"

const App = () => {

    const [user, setUser] = useState(null)
    const handler = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
        console.log(user)
    }
    const login = () => {
        if(user){
            if(user.username==="admin" && user.password==="12345"){
                alert("Login Success")
            }else{
                alert("Login Failed")
            }
        }
    }

    return (
        <>
            <input name="username"  type="text" placeholder="Username"
            onChange={(e)=>{handler(e)}}/> <br />
            <input name="password" type="password" placeholder="Password" 
            onInput={(e)=>{handler(e)}}/> <br />
            <input type="button" value="Signin" 
            onClick={()=>{login()}}/> <br />

        
        </>
    )
}

export default App