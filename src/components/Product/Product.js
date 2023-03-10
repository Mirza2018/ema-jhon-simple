import React from 'react';
import './Product.css'


const Product = (props) => {
    // console.log(props);
    const { handelAddToCart, product } = props;
    const { name, img, seller, price, ratings } = product;
    return (
        <div className='product'>
            <center><img className='product-img' src={img} alt="" /></center>
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>Price: {price}</p>

                <p><small>Seller: {seller}</small></p>
                <p><small>Ratting: {ratings} stars </small></p>

            </div>
            <button onClick={() => handelAddToCart(product.id)} className='btn-cart'><p>
                Add to cart <i class="fa-solid fa-cart-plus"></i>
            </p></button>
        </div>
    );
};

export default Product;