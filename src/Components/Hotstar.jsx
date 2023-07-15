import "./hotstar.module.css"
import hotstr from "./hotstar.module.css"
import pic from "./hotstar.svg"
const Hotstar=()=>{
    return(
        <div>
            <section id={hotstr.nav}>
                <article>
                    <div className={hotstr.Menu}>
                        <ol>
                        <i class="fa-sharp fa solid fa-bars"></i>
                            <img src={pic} alt="" />
                            <li>TV</li>
                            <li>Movies</li>
                            <li>Sports</li>
                            <li>Disney+</li>
                            <li id={hotstr.kid}>KiDS</li>
                        </ol>

                    </div>
                    <div className ={hotstr.Space}></div>
                    <div className={hotstr.Search}>
                        <ol>
                            <input placeholder="Search" />
                            <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
                            <button id={hotstr.subscribe}>SUBSCRIBE</button>
                            <button id={hotstr.login}>LOGIN</button>
                        </ol>

                    </div>
                </article>
             </section>
        </div>
    )
}
export default Hotstar