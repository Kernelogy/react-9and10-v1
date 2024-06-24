// const ScoreBoard = ({status}) => {
//     let content=""
//     switch(status){
//         case "goal":
//             content = (
//                 <>
//                     <h1>Hurray! Congrats for the goal</h1>
//                 </>
//             )
//             break
//         case "missed":
//             content = (
//                 <>
//                     <h1>Never worry! Always can take a goal</h1>
//                 </>
//             )
//     }

//     return(
//         <>
//             {content}
//         </>
//     )
// }

const ScoreBoard = ({status}) => {
    return (
        <>
            {
                status==='goal'
                ?
                    <>
                     <h1>Hurray! Congrats for the goal</h1>
                    </>
                :
                    <>
                        <h1>Never worry! Always can take a goal</h1>
                    </>
            }

        </>
    )
}

export default ScoreBoard

// goal 
// missed