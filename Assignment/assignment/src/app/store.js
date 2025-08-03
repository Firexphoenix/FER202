import { configureStore } from '@reduxjs/toolkit';
import homestayReducer from '../features/homestays/homestaySlice';
import authReducer from '../features/auth/authSlice';
import cartReducer from '../features/cart/cartSlice';
const store = configureStore({
    reducer: {
        homestays: homestayReducer,
        auth: authReducer,
        cart: cartReducer,
    },
});
    
export default store;