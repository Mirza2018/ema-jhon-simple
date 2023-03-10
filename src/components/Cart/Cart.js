import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
           <h3>Order Summary {cart.length}</h3>
        </div>
    );
};

export default Cart;