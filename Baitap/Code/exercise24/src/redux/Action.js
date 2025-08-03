// redux/actions.js
export const addToCart = (product) => ({
    type: 'ADD_TO_CART',
    payload: product
});

export const deleteFromCart = (productId) => ({
    type: 'DELETE_FROM_CART',
    payload: productId
});

export const updateQuantity = (productId, quantity) => ({
    type: 'UPDATE_QUANTITY',
    payload: { productId, quantity }
});
