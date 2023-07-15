import style from "./theme.module.css"

const Theme=()=>{
    let dark=()=>{
        document.body.style.background="black"
        document.body.style.color="white"
    }
    let light=()=>{
        document.body.style.background="whitesmoke"
        document.body.style.color="black"
    }
    return(
        <div id={style.theme}>
            <h1>Dark and Light Theme</h1>
            <input type="radio" name="a" onClick={dark}/>
            <label htmlFor="">Dark</label>
            <input type="radio" name="a" onClick={light}/>
            <label htmlFor="">Light</label>

        </div>
    )
}
export default Theme