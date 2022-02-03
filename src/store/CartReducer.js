const defaultState = {
    cartListId: [2, 3]
}

export const CartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return {...state, cartListId: [...state.cartListId, action.payload]}    
        case 'DELETE_PRODUCT':
            return {...state, cartListId: state.cartListId.filter(cart => +cart !== action.payload)}
        default:
            return state;
    }
}