// const Car = (props) => {
//     return(
//         <>
//             <h1>Name of the Car is {props.name}</h1>
//         </>
//     )
// }

const Car = ({name, color}) => {
    const x = {
        color: "#ff99cc",
        backgroundColor: color
    }
    return(
        <>
            <h1 style={x}>Name of the Car is {name} 
            and color is {color}</h1>
        </>
    )
}

export default Car