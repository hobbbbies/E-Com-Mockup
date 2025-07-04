import { useOutletContext } from "react-router-dom";
import CheckoutCard from "../CheckoutCard/CheckoutCard";

export default function Checkout() {
    const { cartItems } = useOutletContext();

    return (
        <div>
            {cartItems.map((item) => {
                return <CheckoutCard name={item.name} price={item.price}/>
            })}
        </div>
    )
}