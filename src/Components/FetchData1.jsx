import { useEffect, useState } from "react"
import axios from "axios"
const FetchData1=()=>{
    let [content,setContent]=useState([])
    let [id,setId]=useState("")
    let [btn,setBtn]=useState("")

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response)=>{
            console.log("Data is successfully fetched")
            // console.log(response.data)
            setContent(response.data)
        }).catch(()=>{
            console.log("Data is not found")
        })
    },[btn])
    let idData=(e)=>{
        setId(e.target.value)
    }
    let formHandle=()=>{
        setBtn(id)
    }
    // console.log(id)

    return(
        <div>
            {/* {content.map((x)=>{
                return(
                    <div>
                        <h1>{x.id}</h1>
                        <h2>{x.title}</h2>
                    </div>
                )
            })} */}


            <label htmlFor="">Enter ID</label>
            <input type="text" value={id} onChange={idData}/>
            <button onClick={formHandle}>Submit</button>
            <h1>{content.title}</h1>
            <h1>{content.id}</h1>

        </div>
    )
}
export default FetchData1