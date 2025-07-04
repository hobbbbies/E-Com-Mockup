import { useOutletContext } from "react-router-dom";
import CheckoutCard from "../CheckoutCard/CheckoutCard";
import styles from "./Checkout.module.css"

export default function Checkout() {
    const { cartItems } = useOutletContext();

    return (
        <div className={styles.checkout}>
            {cartItems.map((item) => {
                return <CheckoutCard name={item.name} price={item.price}/>
            })}
        </div>
    )
}