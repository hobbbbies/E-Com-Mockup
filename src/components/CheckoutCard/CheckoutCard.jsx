import styles from "./CheckoutCard.module.css";

export default function CheckoutCard({name, price}) {

    return (
        <div className={styles.card}>
            <div>{name}</div>
            <div>{price}</div>
        </div>
    )
}