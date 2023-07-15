import { useMemo, useState } from "react"

const Memo=()=>{
    let [count1,setCount1]=useState(0)
    let [count2,setCount2]=useState(0)

    let incre1=()=>{setCount1(count1+1)}
    let incre2=()=>{setCount2(count2+1)}

    let Even=useMemo(()=>{
        let i=0
        while(i<10000000) i++
        return count1%2==0
    },[count1])
    return(
        <div>
            <h1>{count1}</h1>
            <button onClick={incre1}>Increment1</button>
            <h1>{Even?"EVEN":"ODD"}</h1>
            <h1>{count2}</h1>
            <button onClick={incre2}>Increment2</button>
        </div>
    )
}
export default Memo