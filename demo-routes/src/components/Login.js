import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert, Container, Card } from 'react-bootstrap';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  
  const navigate = useNavigate();

  // Mock user credentials (in real app, this would come from backend)
  const validCredentials = {
    username: 'admin',
    password: 'password123'
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.username.trim()) {
      newErrors.username = 'Tên đăng nhập không được để trống!';
    }
    
    if (!formData.password.trim()) {
      newErrors.password = 'Mật khẩu không được để trống!';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự!';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setShowAlert(true);
      return;
    }

    setIsLoading(true);
    setShowAlert(false);

    // Simulate API call delay
    setTimeout(() => {
      // Check credentials
      if (formData.username === validCredentials.username && 
          formData.password === validCredentials.password) {
        
        // Store login status in localStorage
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', formData.username);
        
        // Redirect to posts page
        navigate('/posts');
      } else {
        setErrors({
          general: 'Tên đăng nhập hoặc mật khẩu không đúng!'
        });
        setShowAlert(true);
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <Card style={{ width: '400px' }}>
        <Card.Header className="text-center">
          <h3>🔐 Đăng Nhập</h3>
        </Card.Header>
        <Card.Body>
          {showAlert && (
            <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
              {errors.general || 'Vui lòng kiểm tra lại thông tin đăng nhập!'}
            </Alert>
          )}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label>Tên đăng nhập</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Nhập tên đăng nhập"
                isInvalid={!!errors.username}
              />
              <Form.Control.Feedback type="invalid">
                {errors.username}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Mật khẩu</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Nhập mật khẩu"
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>

            <div className="d-grid gap-2">
              <Button 
                variant="primary" 
                type="submit" 
                disabled={isLoading}
                className="mb-2"
              >
                {isLoading ? 'Đang đăng nhập...' : 'Đăng Nhập'}
              </Button>
            </div>
          </Form>

          <div className="text-center mt-3">
            <small className="text-muted">
              <strong>Thông tin đăng nhập:</strong><br/>
              Tên đăng nhập: <code>admin</code><br/>
              Mật khẩu: <code>password123</code>
            </small>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login; 