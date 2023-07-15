import { useRef } from "react"

const Reference=()=>{
    let demoRef=useRef()
    console.log(demoRef);   //{current:h1}

    let chgColor=()=>{
        demoRef.current.style.background="red"
    }
    return(
        <div>
            <h1 ref={demoRef}>Hello Reference</h1>
            <h2>Hello 2</h2>
            <p>para</p>
            <button onClick={chgColor}>Change color</button>
        </div>
    )
}
export default Reference
