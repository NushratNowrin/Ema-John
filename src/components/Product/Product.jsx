import React from 'react';
import './Product.css'

const Product = ({img, name, price, seller, ratings}) => {
    return (
        <div className='product'>
        <div className='single-product'>
            <img src={img} alt="" />
            <div className="product-details">
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price :${price}</p>
                <br />
                <p><small>Manufacturer: {seller}</small></p>
                <p><small>Rating: {ratings} star</small></p>
            </div>
        </div>
        <button className='add-to-cart-btn'>Add to Cart</button>
        </div>
    );
};

export default Product;