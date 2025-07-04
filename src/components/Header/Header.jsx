import logo from "../../assets/wildex-high-resolution-logo.png";
import styles from "./Header.module.css";
import ScrollingText from "../FrontPage/ScrollingText";
import {ShoppingCart} from 'lucide-react';
import {useState} from 'react';
import { useNavigate, Outlet, Link } from "react-router-dom";

export default function Header() {
    const [cartHover, setCartHover] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

    const handleMouseEnter =() => {
        setCartHover(true);
    }

    const handleMouseLeave = () => {
        setCartHover(false);
    }

    const handleCartClick = () => {
        navigate('/checkout');
    }

    return (
        <>
        <header className={styles.header}>   
            <div className={styles.leftSide}>
                <img alt="Logo" src={logo}/>
                <h2 className={styles.title}>Wildex</h2>
            </div>
            <div className={styles.rightSide}>
                <Link to='/'>Home</Link>
                <Link to='/products'>Shop</Link>
                
                <div className={styles.cartSection}>
                    <ShoppingCart
                        size="36"
                        className={styles.cart}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={handleCartClick}
                        {...(cartHover ? { fill: "535bf2" } : {})}
                    />
                    <span className={styles.count}>{cartItems.length || 0}</span>
                </div>
            </div>
        </header>
        <ScrollingText 
            fontSize="0.9em" 
            text="FREE SHIPPING /// 50% OFF SITEWIDE /// USE CODE 'WILDEX2370' FOR ADDITIONAL 15% OFF"
            speed="5"
        />
        <Outlet context={{ cartItems: cartItems, setCartItems: setCartItems }}/>
        </>
    )

}