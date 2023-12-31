import { CardProduct } from "../../components/CardProduct"
import styles from "./home.module.scss"
import { Link, useNavigate } from "react-router-dom"
import image from "../../assets/home_page/logo.svg"
import image2 from "../../assets/home_page/person.svg"
export const Home = () => {

    return(
        <>
        <div className="container ">
        <div>
        <nav className={styles.header__nav}>
            <ul className={styles.header__list}>
            <li><img className={styles.logo_image} src={image} alt='image' /></li>
            <div className={styles.nav_flex}>
            <li><button className={styles.nav_button}>Подать обьявление</button></li>
            <li><img className={styles.nav_image} src={image2} alt='image person' /></li>
            <div className={styles.home_content}>

            </div>
            <div>
                <form>
                    
                </form>
            </div>
            </div>
            </ul>
          </nav>
        </div>
        <div className={styles.cards}>
<CardProduct
title="BMW M4 Coupe: A Two-Door"
price="23 000 $"
/>
<CardProduct
title="BMW M4 Coupe: A Two-Door"
price="23 000 $"
/>
<CardProduct
title="BMW M4 Coupe: A Two-Door"
price="23 000 $"
/>
<CardProduct
title="BMW M4 Coupe: A Two-Door"
price="23 000 $"
/>
<CardProduct
title="BMW M4 Coupe: A Two-Door"
price="23 000 $"
/>
<CardProduct
title="BMW M4 Coupe: A Two-Door"
price="23 000 $"
/>
        </div>
        </div>
        </>
    )
}