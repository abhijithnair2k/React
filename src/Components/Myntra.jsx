import style from "./myntra.module.css"
import pic from "./Myntra.jpg"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Myntra=()=>{
    return(
        <div>
            <section id={style.nav}>
                <article>
                    
                    <div className={style.logo}>
                       
                            <img src= {pic} alt="" />
                    </div>
                    <div className={style.menu}>
                        <ol>
                            <li><a href="">MEN</a></li>
                            <li><a href="">WOMEN</a></li>
                            <li><a href="">KIDS</a></li>
                            <li><a href="">HOME & LIVING</a></li>
                            <li><a href="">BEAUTY</a></li>
                            <li><a href="">STUDIO <sup>NEW</sup></a></li>
                        </ol>
                    </div>
                    <div className={style.searchbar}>
                        
                        {/* <i class="fa-solid fa-magnifying-glass"></i> */}
                        {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */}
                        <input placeholder="Search for products,brands and more" />
                    </div>
                    <div className={style.icon}>
                        <ol>
                            <div>
                                <i class="fa-regular fa-user"></i>
                                <li><a href=" ">Profile</a></li>
                            </div>
                            <div>
                                <i class="fa-regular fa-heart"></i>
                                <li><a href=" ">Wishlist</a></li>
                            </div>
                            <div>
                                <i class="fa-solid fa-bag-shopping"></i>
                                <li><a href=" ">Bag</a></li>
                            </div>
                        </ol>
                    </div>
                </article>
            </section>
        </div>
    )
}
export default Myntra

