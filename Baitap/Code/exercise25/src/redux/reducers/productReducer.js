const initialState = {
    productList: [],
    cartItems: [],
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS_SUCCESS':
            return {
                ...state,
                productList: action.payload,
            };
        case 'ADD_PRODUCT':
            return {
                ...state,
                productList: [...state.productList, action.payload],
            };
        case 'UPDATE_PRODUCT':
            return {
                ...state,
                productList: state.productList.map((product) =>
                    product.id === action.payload.id ? action.payload : product
                ),
            };
        case 'DELETE_PRODUCT':
            return {
                ...state,
                productList: state.productList.filter((product) => product.id !== action.payload),
            };
        default:
            return state;
    }
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
            };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item.id !== action.payload),
            };
        case 'CLEAR_CART':
            return {
                ...state,
                cartItems: [],
            };
        default:
            return state;
    }
};