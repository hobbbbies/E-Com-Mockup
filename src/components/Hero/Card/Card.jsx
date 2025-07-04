import styles from "./Card.module.css";

export default function Card({title, description, image, price, rating}) {
    return (
        <div className={styles.card}>
            <img className={styles.img} src={image} role="cardItem"/>

            <div className={styles.textSection}>
                <h3>{title}</h3>
                {/* <p>{description}</p> */}
                <div>{price}</div>
                <div>{rating}</div>
            </div>
        </div>
    )
}