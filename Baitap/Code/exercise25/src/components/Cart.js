import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../redux/actions/productActions';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();

    const total = cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2);

    return (
        <div>
            <h2>🛒 Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <ul className="list-group mb-3">
                        {cartItems.map((item, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                <div>
                                    <h5>{item.name}</h5>
                                    <small className="text-muted">{item.description}</small>
                                </div>
                                <div>
                                    <span className="badge bg-primary rounded-pill me-3">${item.price}</span>
                                    <button className="btn btn-sm btn-outline-danger" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <h4>Total: ${total}</h4>
                    <button className="btn btn-danger" onClick={() => dispatch(clearCart())}>Clear Cart</button>
                </div>
            )}
        </div>
    );
};

export default Cart;
