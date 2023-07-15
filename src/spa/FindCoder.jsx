import style from "./findcoder.module.css"
import Logo from "./Logo"
import Menu from "./Menu"
import Button from "./Button"
const FindCoder=()=>{
    return(
        <section id={style.nav}>
            <article>
                <div className={style.Logo}><Logo/></div>
                <div className={style.Menu}><Menu/></div>
                <div className={style.Button}><Button/></div>
            </article>
        </section>
    )
}
export default FindCoder