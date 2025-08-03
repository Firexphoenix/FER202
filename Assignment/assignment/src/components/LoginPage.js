import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../features/auth/authThunks';
import { Navigate } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';

const LoginPage = () => {
    const [form, setForm] = useState({ username: '', password: '' });
    const dispatch = useDispatch();
    const { user, error } = useSelector(state => state.auth);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(form));
    };

    if (user) return <Navigate to="/" replace />;

    return (
        <div className="container mt-5">
            <h3>Đăng nhập</h3>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-2">
                    <Form.Label>Tên đăng nhập</Form.Label>
                    <Form.Control name="username" value={form.username} onChange={handleChange} required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Mật khẩu</Form.Label>
                    <Form.Control name="password" type="password" value={form.password} onChange={handleChange} required />
                </Form.Group>
                <Button type="submit">Đăng nhập</Button>
            </Form>
        </div>
    );
};

export default LoginPage;