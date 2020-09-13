import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/CartAction';
import Product from '../product/Product';

const Shop = (props) => {
    const { product, addToCart} = props;
    console.log(props)
    return (
        <div>
            <h1>This is Shop Component.</h1>
           { 
               product.map(pd => <Product
               key={pd.id} 
               pd={pd}
               addToCart = {addToCart}
               /> )
           }
           
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart, 
        product : state.products
    }
}

const mapDispatchToProps = {
    addToCart : addToCart
}

export default connect(mapStateToProps,mapDispatchToProps) (Shop);