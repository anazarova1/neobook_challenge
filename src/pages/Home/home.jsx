import { CardProduct } from "../../components/CardProduct"
import styles from "./home.module.scss"
import { Link, useNavigate } from "react-router-dom"

export const Home = () => {

    return(
        <>
        <div>

        <div>
        <nav className={styles.header__nav}>
            <ul className={styles.header__list}>
            <li className={styles.header__item}><Link className={styles.header__link} to="/home">Главная</Link></li>
            <li className={styles.header__item}><Link className={styles.header__link} to="/register">Главная</Link></li>
            <li className={styles.header__item}><Link className={styles.header__link} to="/login">Главная</Link></li>
            </ul>
          </nav>
        </div>
        <div>
<CardProduct/>
        </div>
        </div>
        </>
    )
}