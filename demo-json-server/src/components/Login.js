import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Container, Form, Button, Alert } from "react-bootstrap";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!username || !password) {
            setStatus("Vui lòng điền đầy đủ thông tin đăng nhập.");
            return;
        }

        try {
            // Giả lập kiểm tra đăng nhập (thay bằng API thực tế nếu có)
            const response = await axios.get("http://localhost:3000/useraccounts", {
                params: { username, password },
            });
            const user = response.data.find(
                (u) => u.username === username && u.password === password
            );
            if (user) {
                setStatus(`Login successfully with username: ${username}`);
                setTimeout(() => navigate("/posts"), 1000); // Điều hướng sau 1 giây
            } else {
                setStatus("Tên đăng nhập hoặc mật khẩu không đúng.");
            }
        } catch (error) {
            setStatus("Có lỗi xảy ra khi đăng nhập.");
            console.error("Lỗi khi đăng nhập:", error);
        }
    };

    return (
        <Container className="mt-5">
            <h1>Đăng Nhập</h1>
            {status && <Alert variant={status.includes("successfully") ? "success" : "danger"}>{status}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Tên đăng nhập</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Nhập tên đăng nhập"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Mật khẩu</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Nhập mật khẩu"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Đăng nhập
                </Button>
            </Form>
        </Container>
    );
};

Login.propTypes = {
    username: PropTypes.string,
    password: PropTypes.string,
};

export default Login;