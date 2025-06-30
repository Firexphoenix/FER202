import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Alert, Spinner } from 'react-bootstrap';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear login data from localStorage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    
    // Redirect to login page after a short delay
    const timer = setTimeout(() => {
      navigate('/login');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <div className="text-center">
        <Spinner animation="border" role="status" className="mb-3">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <Alert variant="info">
          <h4>👋 Đăng xuất thành công!</h4>
          <p>Bạn sẽ được chuyển hướng đến trang đăng nhập...</p>
        </Alert>
      </div>
    </Container>
  );
};

export default Logout; 