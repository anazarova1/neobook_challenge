import styles from "./CardProduct.module.scss"
import img from "../../assets/card_product/image1.png"
import image from "../../assets/card_product/Heart.svg"
export const CardProduct = (props) => {
    return(
        <>
        <div className={styles.card}>
            <div className={styles.card_img_par}>
            <img className={styles.card_img} src={img} alt='img' />
            </div>
 <h2 className={styles.card_title}>{props.title}</h2>
<h3 className={styles.card_price}>{props.price}</h3>
<img className={styles.card_image} src={image} alt='image' />

        </div>
        </>
    )
}