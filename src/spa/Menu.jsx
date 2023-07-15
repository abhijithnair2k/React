import React from "react"
import style from "./findcoder.module.css"
const Menu=()=>{
    return(
        <div>
            <ol id={style.menuBlock}>
                <li><Link to="comp1">Explore Work</Link></li>
                <li><Link to="comp2">Hire Talents</Link></li>
                <li><Link to="comp3">Dev board</Link></li>
                <li><Link to="comp4">Challenges</Link></li>
            </ol>
        </div>
    )
}
export default Menu