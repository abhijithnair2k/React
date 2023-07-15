import flip from "./flipkart.module.css"
import pic from "./Flipkart.jpg"
const Flipkart=()=>{
    return(
        <div>
            <section id={flip.nav}>
              <article>
                <div className={flip.Search}>
                    <img src={pic} alt="" />
                    <input placeholder="Search for products, brands and more" />
                    <i class="fa-solid fa-magnifying-glass"></i>
             
             
              </div>

                <div className={flip.Menu}>
                <ol>
               <button> Login </button>
               <li> Become a Seller</li>
               <div>
                <li>More</li>
                <i class="fa-solid fa-caret-down"></i>
               </div>
               <div>
                <i class="fa-solid fa-caret-shopping"></i>
                <li>Cart</li>
               </div>
            </ol>
            </div>
            </article>
              </section>
              
        </div>
    )
}
export default Flipkart