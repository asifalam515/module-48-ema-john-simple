import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(data=>data.json())
        .then(data=>setProducts(data))
    },[])
    const handleAddToCart=(product)=>{
        console.log(product)
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
        {
            products.map(product=><Product handleAddToCart={handleAddToCart} key={product.id} product={product}></Product>)
        }

            </div>
            <div className="cart-container">
        <h1>Order summary</h1>
            </div>
        </div>
    );
};

export default Shop;