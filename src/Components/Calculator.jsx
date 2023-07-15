import { useRef, useState } from "react"
const Calculator=()=>{
    let num1=useRef()
    let num2=useRef()
    let [result,setResult]=useState(0)

    let add=()=>{
        let a=Number(num1.current.value)
        let b=Number(num2.current.value)
        setResult(a+b)
    }
    let sub=()=>{
        let a=num1.current.value
        let b=num2.current.value
        setResult(a-b)
    }
    let mul=()=>{
        let a=num1.current.value
        let b=num2.current.value
        setResult(a*b)
    }

    return(
        <div>
            <label htmlFor="">Enter Num1</label>
            <input type="number" ref={num1}/> <br />
            <label htmlFor="">Enter Num2</label>
            <input type="number" ref={num2}/><br />

            <button onClick={add}>+</button>
            <button onClick={sub}>-</button>
            <button onClick={mul}>*</button>
            <h1>{result}</h1>
        </div>
    )
}
export default Calculator