import { useState } from "react"
import '../css/MyStyles.css'

import Styles from '../css/Styles.module.css'

const StyleComponent = () => {
    // let myStyle = {
    //     backgroundColor: "red",
    //     color: "white",
    //     fontSize: "30px"
    // }
    const [myStyle, setMyStyle] = useState({
        backgroundColor: "red",
        color: "white",
        fontSize: "30px"
    })

    return (
        <>
            {/* <h1 style={{backgroundColor: "red", color: "white"}}>Hello World</h1> */}
            {/* <h1 style={
                {
                    backgroundColor: "red", 
                    color: "white"
                }
            }>Hello World</h1> */}
            <h1 style={myStyle}>Hello World</h1>
            <input type="button" value="Red" 
            onClick={(e)=> {setMyStyle({...myStyle,backgroundColor: "red"})}}/> <br />
            <input type="button" value="Blue" 
            onClick={(e)=> {setMyStyle({...myStyle,backgroundColor: "blue"})}}/> <br />

            <p id="para">Mother Earth</p> <br />
            <p className={Styles.bigblue}>Hello World</p>
            <p className={Styles.bigred}>Hello World</p>


        </>
    )
}

export default StyleComponent