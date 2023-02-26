import React, { useState } from 'react';
import './Product.css'

const Product = (props) => {
    const{name,img,seller,price,ratings,id}=props.product
    
    
    return (
        <div className='product'>
           <img src={img} alt="photo of products" />
          <div className="product-info">
          <p className='product-name'>{name}</p>
           <p>Price:{price}</p>
           <p><small>Seller:{seller}</small></p>
           <p><small>Ratings:{ratings} stars</small></p>
          </div>
          <button onClick={()=>{props.handleAddToCart(props.product)}} className='btn-cart'><p>Add To Cart</p></button>
        </div>
    );
};

export default Product;