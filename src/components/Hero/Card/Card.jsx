import styles from "./Card.module.css";

export default function Card({title, description, image, price, rating, cartItems, setCartItems}) {
    
    const handleAdd = () => {
        const item = { title: title, price: price};
        setCartItems(prevItems => [...prevItems, item]);
    }

    const handleRemove = () => {
                console.log(cartItems);

        const index = cartItems.findIndex(item => 
            item.title === title && item.price === price
        );
        
        if (index !== -1) {
            const newItems = [...cartItems];
            newItems.splice(index, 1);
            console.log(newItems);
            setCartItems(newItems);
        }
    }
   
    return (
        <div className={styles.card}>
            <img className={styles.img} src={image} role="cardItem"/>

            <div className={styles.textSection}>
                <h3>{title}</h3>
                {/* <p>{description}</p> */}
                <div>{price}</div>
                <div>{rating}</div>
            </div>
            <div className={styles.buttonGroup}>
                <button onClick={handleAdd}>+</button>
                <button onClick={handleRemove}>-</button>
            </div>
        </div>
    )
}