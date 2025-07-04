import { useOutletContext } from "react-router-dom";
import CheckoutCard from "../CheckoutCard/CheckoutCard";
import styles from "./Checkout.module.css"

export default function Checkout() {
    const { cartItems } = useOutletContext();

    return (
        <div className={styles.checkout}>
            <div className={styles.cardSection}>
                {cartItems.map((item) => {
                    return <CheckoutCard title={item.title} price={item.price}/>
                })}
            </div>
            <div className={styles.payment}><button>Pay now</button></div>
        </div>
    )
}