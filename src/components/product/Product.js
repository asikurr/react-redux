import React from 'react';

const Product = (props) => {
    const {name, id} = props.pd;
    return (
        <div style={{width: '320px', border: '1px solid tan', margin: '.5rem', padding:'.5rem'}}>
            <h3>{name}</h3>
            <button>Add to cart</button>
        </div>
    );
};

export default Product;