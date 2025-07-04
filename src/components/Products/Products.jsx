import {useEffect, useState} from 'react'
import Card from '../Hero/Card/Card';
import styles from "./Products.module.css"
import Header from '../Header/Header';
import { useOutletContext } from 'react-router-dom';

export default function Products() {
    const { setCartItems } = useOutletContext();
    const [fakes, setFakes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch('https://fakestoreapi.com/products')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setFakes(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    const handleClick = () => {
        const item = { name: 'shirt', price: "10"};
        setCartItems(prevItems => [...prevItems, item]);
    }

    if (loading) return <div>Loading products...</div>;
    if (error) return <div>Error loading products: {error}</div>;
    if (fakes.length === 0) return <div>No products found</div>;

    return (
    <>
    <button onClick={handleClick}>Click me</button>
    <div className={styles.productsContainer}>
        {fakes.map((product) => {
            return <Card
                key={product.id}
                title={product.title}
                description={product.description}
                image={product.image}
                price={`$${product.price}`}
                rating={`${product.rating.rate}/5 (${product.rating.count} reviews)`}
            />
        })}
    </div>
    </> 
    )
}