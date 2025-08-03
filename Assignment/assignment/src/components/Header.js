import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice'; // đường dẫn đúng theo dự án của bạn

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector(state => state.auth.user); // hoặc lấy từ localStorage nếu chưa dùng Redux

    const handleLogout = () => {
        dispatch(logout());
        localStorage.removeItem('authUser');
        navigate('/login');
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">Homestay App</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">Trang chủ</Nav.Link>
                        <Nav.Link as={Link} to="/cart">Giỏ hàng</Nav.Link>
                        {user?.role === 'admin' && (
                            <Nav.Link as={Link} to="/add">Thêm homestay</Nav.Link>
                        )}
                        {!user ? (
                            <Nav.Link as={Link} to="/login">Đăng nhập</Nav.Link>
                        ) : (
                            <Nav.Link onClick={handleLogout}>Đăng xuất</Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
