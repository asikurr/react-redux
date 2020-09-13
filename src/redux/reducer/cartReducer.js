import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/CartAction";


const innitialState = {
    cart : [],
    products : [
        {name: 'Lenovo Laptop', id:1},
        {name: 'Asus Laptop', id:2},
        {name: 'Apple Laptop', id:3},
        {name: 'Acer Laptop', id:4},
        {name: 'Dell Laptop', id:5}
    ]
}

const cartReducer = (state = innitialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            console.log(action)
            // const cartId = action.id
            const newItem = {
                productId: action.id, 
                name : action.name, 
                cartId : state.cart.length + 1
            }
            const newCart = [...state.cart, newItem]
            return {
            //    cart : [...state.cart, action.id],
                ...state,
                cart: newCart
            
            }
        
            case REMOVE_FROM_CART:
                const id = action.id;
                const newCarts = state.cart.filter(item  => item.cartId !== id)
                return {
                    ...state,
                    cart : newCarts
                }

        default:
            return state
    }
}

export default cartReducer;