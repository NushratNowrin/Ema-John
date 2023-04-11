import React from 'react';
import './Sidebar.css'

const Sidebar = ({carts}) => {
    let shippingCharge = 0;
    let price = 0;
    for(const product of carts){
        shippingCharge = shippingCharge + product.shipping;
        price = price + product.price;
        // console.log(product);
    }
    let tax = price*0.05; {/* suppose tax is 5% of price */}
    tax = parseInt(tax);
    return (
        <div className='sidebar'>
            <h2>Order Summary</h2>
                <p>Selected Items: {carts.length}</p>
                <p>Total Price: ${price}</p>
                <p>Total Shipping Charge: ${shippingCharge}</p>
                <p>Tax: ${tax}</p>
                <h3>Grand Total: ${price + shippingCharge + tax}</h3>
        </div>
    );
};

export default Sidebar;