import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Button, Form, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ setUser }) => {
    const [form, setForm] = useState({ username: '', password: '' });
    const [message, setMessage] = useState('');
    const [variant, setVariant] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const res = await axios.get(`http://localhost:9999/UserAccounts`, {
                params: {
                    username: form.username,
                    password: form.password
                }
            });

            if (res.data.length > 0) {
                setUser(res.data[0]);
                // alert(`Welcome, ${form.username}! Login Successful!`);
                // navigate('/motorbikes'); // 👉 chuyển trang sau login
                setMessage(`Welcome, ${form.username}! Login Successful!`);
                setVariant('success');
                setTimeout(() => navigate('/motorbikes'), 1000);
            } else {
                setMessage('Invalid username or password!');
                setVariant('danger');
            }
        } catch (err) {
            console.error(err);
            setMessage('Something went wrong!');
            setVariant('danger');
        }
    };

    return (
        <div className="login-form">
            <h2>Login</h2>
            {message && (
                <Alert variant={variant} onClose={() => setMessage('')} dismissible>
                    {message}
                </Alert>
            )}
            <Form>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" onChange={e => setForm({ ...form, username: e.target.value })} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onChange={e => setForm({ ...form, password: e.target.value })} />
                </Form.Group>
                <Button onClick={handleLogin}>Login</Button>
            </Form>
        </div>
    );
};

LoginPage.propTypes = {
    setUser: PropTypes.func.isRequired
};

export default LoginPage;
