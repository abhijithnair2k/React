import content from "./usersData.json";
import { Fragment, useState } from "react";
const FetchData=()=>{
    let [users,setUsers]=useState(content)
    return(
        <div>
            <h1>{users.map((x)=>{
            return(
                <Fragment key={x.id}>
                    <h1>{x.id}</h1>
                    <h1>{x.login}</h1>
                    <img src={x.avatar_url}/>
                </Fragment>
            )
            })}</h1>
        </div>
    )
}
export default FetchData