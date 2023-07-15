import { useState } from "react";
import App from "../App";
const State=()=>{
    let [abc,setAbc]=useState("Hungry")
    let eat=()=>{setAbc("Not hungry")}
    return(
        <div>
            {abc}
            <button onClick={eat}>Food</button>
        </div>
    )
}
export default State