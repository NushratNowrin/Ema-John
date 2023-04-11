import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";
import Sidebar from "../Sidebar/Sidebar";
import { addToDb, getShoppingCart } from "../../assets/utilities/fakedb";
import { faToiletPaperSlash } from "@fortawesome/free-solid-svg-icons";

const Shop = () => {
	// const eventHandler = (product) =>{
	//     eventHandler(product);
	// }
	const [products, setProducts] = useState([]);
	const [carts, setCarts] = useState([]);
	const [price, setPrice] = useState(0);
	useEffect(() => {
		// fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
		fetch("products.json")
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);

	useEffect(() => {
		const storedData = getShoppingCart();
        const savedCart = [];
		// console.log(storedData)
		// step-1 : id
		for (const id in storedData) {
			//step-2 : get the product using id
			const addedProduct = products.find((product) => product.id === id);
			if (addedProduct) {
				//step-3 : get product quantity
				const totalQuantity = storedData[id];
				// console.log(id, storedData);
				// console.log(addedProduct.quantity);
				addedProduct.quantity = totalQuantity;
                //step-4 : Add the added product to the saved cart
                savedCart.push(addedProduct);
			}
            // step-5 : saved cart set to the setCarts (useEffect)
            setCarts(savedCart)
		}
	}, [products]);

	const handleCart = (product) => {
		let newCart = [...carts, product];
		setCarts(newCart);
		const productPrice = product.price;
		const newPrice = price + productPrice;
		setPrice(newPrice);
		addToDb(product.id);
	};

	return (
		<div className='shop-container'>
			<div className='products-container'>
				{products.map((product) => (
					<Product
						key={product.id}
						product={product}
						handleCart={handleCart}></Product>
				))}
			</div>
			<div className='side-bar'>
				<Sidebar carts={carts}></Sidebar>
			</div>
		</div>
	);
};

export default Shop;
