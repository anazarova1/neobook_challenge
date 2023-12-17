import styles from "./CardProduct.module.scss"
import img from "../../assets/card_product/image1.png"
import image from "../../assets/card_product/Heart.svg"
export const CardProduct = (props) => {
    return(
        <>
        <div className={styles.card}>
        <img className={styles.card_img} src={img} alt='img' />
 <h2>{props.title}</h2>
<h3>{props.price}</h3>
<img className={styles.card_image} src={image} alt='image' />

        </div>
        </>
    )
}