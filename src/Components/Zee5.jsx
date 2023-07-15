import zee from "./zee5.module.css"
import pic from "./zee5.png"
const Zee5=()=>{
    return(
        <div>
            <section id={zee.nav}>
                <article>
                    <div className={zee.Menu}>
                        <ol>
                            <img src={pic} alt="" />
                            <li>Home</li>
                            <li>TV Shows</li>
                            <li>Movies</li>
                            <li><i class="fa-sharp fa-solid fa-baseball"></i>Cricket</li>
                            <li>Web Series</li>
                            <i class="fa-sharp fa-solid fa-table-cells"></i>
                        </ol>

                    </div>
                    <div className ={zee.Space}></div>
                    <div className={zee.Search}>
                        <ol>
                            <div>
                            <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
                            <input placeholder="Search for Movies,Shows,Channels etc." />
                            </div>
                            <button id={zee.aa}>A<sup>अ</sup></button>
                            <button id={zee.login}>LOGIN</button>
                            <button id={zee.plan}><i class="fa-solid fa-crown"></i>BUY PLAN</button>
                            <i class={"fa-sharp fa-solid fa-bars"}></i>
                        </ol>

                    </div>
                </article>
             </section>
        </div>
    )
}
export default Zee5