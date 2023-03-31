import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    // const eventHandler = (product) =>{
    //     eventHandler(product);
    // }
    const [products, setProducts] = useState([]);
    const [carts, setCarts] = useState([]);
    const [price, setPrice] = useState(0);
    let shippingCharge;
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    } ,[])
    const handleCart = (product) =>{
        let newCart = [...carts, product];
        setCarts(newCart);
        const productPrice = product.price;
        const newPrice = price+ productPrice;
        setPrice(newPrice);
    }
    if(price == 0){
        shippingCharge = 0;
    }
    else if(price < 500){
        shippingCharge = 20;
    }
    else if(price>500 && price<1000){ 
        shippingCharge = 10;
    }
    else{
        shippingCharge = 5;
    }
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                products.map(product => 
                <Product
                    key={product.id}
                    product = {product}
                    handleCart = {handleCart}
                >
                </Product>)
                }
            </div>
            <div className="side-bar">
                <h2>Order Summary</h2>
                <p>Selected Items: {carts.length}</p>
                <p>Total Price: ${price}</p>
                <p>Total Shipping Charge: ${shippingCharge}</p>
                <p>Tax: $114</p>
                <h3>Grand Total: ${price + shippingCharge + 114}</h3>
            </div>
        </div>
    );
};

export default Shop;