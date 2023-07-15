import { useContext } from "react"
import {userData} from "../App"
const B1=()=>{
    let content=useContext(userData)
    return(
        <div>
            {content} Good Morning

        </div>
    )
}
export default B1