import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts]=useState([])
    const [cart,setCart]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(data=>data.json())
        .then(data=>setProducts(data))
    },[])
    // event handler
    const handleAddToCart=(product)=>{
        const newCart=[...cart,product]
        setCart(newCart)
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
        {
            products.map(product=><Product handleAddToCart={handleAddToCart} key={product.id} product={product}></Product>)
        }

            </div>
            {/* cart container started from here */}
            <div className="cart-container">
        <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;