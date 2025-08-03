// components/Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteFromCart, updateQuantity } from '../redux/Action';

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const handleChangeQuantity = (id, newQuantity) => {
        if (newQuantity <= 0) {
            dispatch(deleteFromCart(id));
        } else {
            dispatch(updateQuantity(id, newQuantity));
        }
    };

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div>
            <h2>Cart</h2>
            {cart.length === 0 ? (
                <p>Cart is empty.</p>
            ) : (
                cart.map(item => (
                    <div key={item.id} style={{ borderBottom: '1px solid gray', marginBottom: 10 }}>
                        <p><strong>{item.name}</strong> - ${item.price} × {item.quantity}</p>
                        <div>
                            <button onClick={() => handleChangeQuantity(item.id, item.quantity - 1)}>-</button>
                            <span style={{ margin: '0 10px' }}>{item.quantity}</span>
                            <button onClick={() => handleChangeQuantity(item.id, item.quantity + 1)}>+</button>
                            <button style={{ marginLeft: 10 }} onClick={() => dispatch(deleteFromCart(item.id))}>
                                Delete
                            </button>
                        </div>
                    </div>
                ))
            )}

            {cart.length > 0 && <h3>Total: ${total.toFixed(2)}</h3>}
        </div>
    );
};

export default Cart;
