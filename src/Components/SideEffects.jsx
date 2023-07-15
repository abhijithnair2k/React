import { useEffect, useState } from "react"

const SideEffect=()=>{
    let [count,setCount]=useState(0)
    let [count1,setCount1]=useState(10)
    let incre=()=>{
        setCount(count+1)
    }
    let incre1=()=>{
        setCount1(count1+1)
    }
    useEffect(()=>{
        console.log("Good Morning")
    },[count,count1])
    return(
        <div>
            {count}
            <button onClick={incre}>Increment</button> <br />
            {count1}
            <button onClick={incre1}>Increment1</button>
        </div>
    )
}
export default SideEffect