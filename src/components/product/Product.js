import React from 'react';

const Product = (props) => {
    const {addToCart , pd} = props;
    return (
        <div style={{width: '320px', border: '1px solid tan', margin: '.5rem', padding:'.5rem'}}>
            <h3>{pd.name}</h3>
            <button onClick={() => addToCart(pd.id, pd.name) }>Add to cart</button>
        </div>
    );
};

export default Product;