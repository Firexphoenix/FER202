import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Navigation() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check login status on component mount
    const loginStatus = localStorage.getItem('isLoggedIn') === 'true';
    const user = localStorage.getItem('username') || '';
    setIsLoggedIn(loginStatus);
    setUsername(user);
  }, []);

  const handleLogout = () => {
    // Clear login data
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    setUsername('');
    navigate('/logout');
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">📝 React App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">🏠 Home</Nav.Link>
            <Nav.Link as={Link} to="/about">ℹ️ About</Nav.Link>
            {isLoggedIn && (
              <Nav.Link as={Link} to="/posts">📰 Posts</Nav.Link>
            )}
          </Nav>
          <Nav>
            {isLoggedIn ? (
              <>
                <Navbar.Text className="me-3">
                  👤 Xin chào, <strong>{username}</strong>!
                </Navbar.Text>
                <Button 
                  variant="outline-light" 
                  onClick={handleLogout}
                  size="sm"
                >
                  🚪 Đăng xuất
                </Button>
              </>
            ) : (
              <Nav.Link as={Link} to="/login">
                🔐 Đăng nhập
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
