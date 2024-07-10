import { useEffect, useState } from "react"

const Posts = () => {
    const data = [
        {
            id: 1,
            title: "Title 1",
            desc: "Some Description"
        },
        {
            id: 2,
            title: "Title 2",
            desc: "Some Description"
        },
        {
            id: 3,
            title: "Title 3",
            desc: "Some Description"
        }
    ]
    return (
        <>
        {
            data && 
            data.map((e)=>{
                return <>
                    <h1>{e.id} {e.title}</h1>
                    <h3>{e.desc}</h3>
                </>
            })
        }
        </>
    )
}

export default Posts