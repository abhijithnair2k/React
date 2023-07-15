import { useState } from "react"

const Controlled=()=>{
    let [name,setName]=useState(" ")
    let [email,setEmail]=useState(" ")

    let nameData=(e)=>{
        setName(e.target.value)
    }
    let emailData=(e)=>{
        setEmail(e.target.value)
    }

    let formHandle=(e)=>{
        // console.log(e)
        e.preventDefault()
        console.log(name,email)
    }
    return(
        <div>
            <h1>Controlled form</h1>
            <label htmlFor="">Name</label>
            <input type="text" value={name} onChange={nameData}/> <br />
            <label htmlFor="">Email</label>
            <input type="text" value={email} onChange={emailData}/><br />
            <button onClick={formHandle}>Submit</button>
        </div>
    )
}
export default Controlled