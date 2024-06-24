import { useState } from "react"

const App = () => {
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)

    const handleSignin = (e) => {
       
        if(username === 'admin' && password === '12345'){
            alert("Login Success")
            e.target.value = 'Login Success'
        }else{
            alert('Login Failed')
            e.target.value = 'Login Failed'
        }
    }
    return (
        <>
            <input id="username"  type="text" placeholder="Username" 
            onChange={(e)=>{setUsername(e.target.value)}}/> <br />
            <input id="password" type="password" placeholder="Password" 
            onInput={(e)=>{setPassword(e.target.value)}}/> <br />
            <input type="button" value="Signin" onClick={(e)=>{handleSignin(e)}} /> <br />
            { 
                username &&
                <>Username is {username}</>
            }
        
        </>
    )
}

export default App