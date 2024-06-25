const App = () => {
    const greetMessage = (e) => {
        const name = document.getElementById("txt").value
        alert("Welcome " + name)
    }
    return (
        <>
            Enter Name : <input id="txt" type="text" placeholder="Name"  />
            <input type="button" value="Greet"
            onClick={(e)=>{greetMessage(e)}} />             
            
        </>
    )
}

export default App