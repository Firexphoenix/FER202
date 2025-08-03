import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, clearCart, updateQuantity } from '../features/cart/cartSlice';
import { Button, Table, Form } from 'react-bootstrap';

const CartPage = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const handleRemove = (id) => dispatch(removeFromCart(id));
    const handleClear = () => dispatch(clearCart());
    const handleQuantityChange = (id, value) => {
        const quantity = parseInt(value);
        if (quantity >= 1) {
            dispatch(updateQuantity({ id, quantity }));
        }
    };

    return (
        <div className="container mt-4">
            <h3>Giỏ hàng</h3>
            {cart.length === 0 ? (
                <p>Giỏ hàng trống.</p>
            ) : (
                <>
                    <Table bordered>
                        <thead>
                            <tr>
                                <th>Tên</th>
                                <th>Giá</th>
                                <th>Số lượng</th>
                                <th>Tổng</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.currentPrice}</td>
                                    <td>
                                        <Form.Control
                                            type="number"
                                            min={1}
                                            value={item.quantity}
                                            onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                                        />
                                    </td>
                                    <td>{item.quantity * parseInt(item.currentPrice)}</td>
                                    <td>
                                        <Button variant="danger" onClick={() => handleRemove(item.id)}>Xóa</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <Button variant="secondary" onClick={handleClear}>Xóa tất cả</Button>{' '}
                    <Button variant="success" href="/checkout">Thanh toán</Button>
                </>
            )}
        </div>
    );
};

export default CartPage;
