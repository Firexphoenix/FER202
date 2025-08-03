// Thunk fetch mock data
export const fetchProducts = () => {
    return (dispatch) => {
        // Mock product list (fake API)
        const mockProducts = [
            {
                id: '123456',
                name: 'Example Product',
                price: 9.99,
                description: 'This is an example product.',
                catalogs: ['catalog1', 'catalog2'],
            },
            {
                id: '789012',
                name: 'Another Product',
                price: 14.99,
                description: 'Another sample product.',
                catalogs: ['catalog3'],
            },
        ];

        // Simulate API call
        setTimeout(() => {
            dispatch({
                type: 'FETCH_PRODUCTS_SUCCESS',
                payload: mockProducts,
            });
        }, 1000);
    };
};

export const addProduct = (product) => {
    return {
        type: 'ADD_PRODUCT',
        payload: product,
    };
};

export const addToCart = (product) => {
    return {
        type: 'ADD_TO_CART',
        payload: product,
    };
};

export const updateProduct = (product) => {
    return {
        type: 'UPDATE_PRODUCT',
        payload: product,
    };
};

export const deleteProduct = (id) => {
    return {
        type: 'DELETE_PRODUCT',
        payload: id,
    };
};

export const removeFromCart = (id) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: id,
    };
};

export const clearCart = () => {
    return {
        type: 'CLEAR_CART',
    };
};
