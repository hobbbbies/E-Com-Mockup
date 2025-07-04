import styles from "./CheckoutCard.module.css";

export default function CheckoutCard({title, price}) {

    return (
        <div className={styles.card}>
            <div className={styles.title}>{title}</div>
            <div className={styles.price}>{price}</div>
        </div>
    )
}