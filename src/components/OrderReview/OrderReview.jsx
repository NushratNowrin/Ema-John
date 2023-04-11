import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import '../Shop/Shop.css'
import { useLoaderData } from 'react-router-dom';

const OrderReview = () => {
    const products = useLoaderData();
    console.log(products)
    return (
        <div className='shop-container'>
			<div className='products-container'>
				<h2>order page: {products.length}</h2>
			</div>
			<div className='side-bar'>
				<Sidebar carts={[]}></Sidebar>
			</div>
		</div>
    );
};

export default OrderReview;