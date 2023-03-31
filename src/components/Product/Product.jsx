import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
	const { img, name, price, seller, ratings } = props.product;
	const handleCart = props.handleCart;

	return (
		<div className='product'>
			<div className='single-product'>
				<img src={img} alt='' />
				<div className='product-details'>
					<p className='product-name'>{name}</p>
					<p className='product-price'>Price :${price}</p>
					<p>
						<small>Manufacturer: {seller}</small>
					</p>
					<p>
						<small>Rating: {ratings} star</small>
					</p>
				</div>
			</div>
			<button
				className='add-to-cart-btn'
				onClick={() => handleCart(props.product)}>
				Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
			</button>
		</div>
	);
};

export default Product;
