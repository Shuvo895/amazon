import React from 'react';
import './product.css'
const Product = (props) => {
   
    const{name, img, seller, price, ratings}=props.product;
    
    return (
        <div className='product'>
            <img src={img} alt=''/>
            <p className='product-name'>{name}</p>
            <div className='product-info'>
            <p>price:{price}</p>
            <p>Seller:{seller}</p>
            <p>Ratings:{ratings}</p>
            </div>
            <button onClick={() =>props.handleAddToCart(props.product)} className='btn-cart'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;