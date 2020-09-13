import React from 'react';
import Product from '../product/Product';

const Shop = () => {
    const products = [
        {name: 'Lenovo Laptop', id:1},
        {name: 'Asus Laptop', id:2},
        {name: 'Apple Laptop', id:3},
        {name: 'Acer Laptop', id:4},
        {name: 'Dell Laptop', id:5}
    ]
    return (
        <div>
            <h1>This is Shop Component.</h1>
           { 
               products.map(pd => <Product pd={pd}/> )
           }
           
        </div>
    );
};

export default Shop;