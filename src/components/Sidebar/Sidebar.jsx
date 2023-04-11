import React from 'react';
import './Sidebar.css'

const Sidebar = ({carts}) => {
    let shippingCharge = 0;
    let price = 0;
    let quantity = 0;
    for(const product of carts){
        if(product.quantity ===0){
            product.quantity =1;
        }
        // product.quantity = product.quantity || 1;
        shippingCharge = shippingCharge + product.shipping;
        price = price + product.price * product.quantity;
        quantity = quantity + product.quantity;
        // console.log(product);
    }
    let tax = price*0.05; {/* suppose tax is 5% of price */}
    tax = parseInt(tax);
    return (
        <div className='sidebar'>
            <h2>Order Summary</h2>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${price}</p>
                <p>Total Shipping Charge: ${shippingCharge}</p>
                <p>Tax: ${tax}</p>
                <h3>Grand Total: ${price + shippingCharge + tax}</h3>
        </div>
    );
};

export default Sidebar;