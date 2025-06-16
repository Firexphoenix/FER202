import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const ValidatedForm = () => {
  // State for form fields and validation
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [touched, setTouched] = useState({ email: false, password: false });

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  // Handle input changes and track touch state
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setTouched({ ...touched, email: true });
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setTouched({ ...touched, password: true });
  };

  // UseEffect for validation
  useEffect(() => {
    // Validate email only if touched
    if (touched.email) {
      const valid = validateEmail(email);
      setIsEmailValid(valid);
      setEmailError(valid ? '' : 'Email không hợp lệ!');
    }
    // Validate password only if touched
    if (touched.password) {
      const valid = validatePassword(password);
      setIsPasswordValid(valid);
      setPasswordError(valid ? '' : 'Mật khẩu phải có ít nhất 8 ký tự!');
    }
  }, [email, password, touched]);

  // Check if form is fully valid
  const isFormValid = isEmailValid && isPasswordValid && touched.email && touched.password && email && password;

  return (
    <Form>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={handleEmailChange}
          isInvalid={touched.email && !isEmailValid}
          isValid={touched.email && isEmailValid}
          placeholder="Enter email"
        />
        <Form.Control.Feedback type="invalid">
          {emailError}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={handlePasswordChange}
          isInvalid={touched.password && !isPasswordValid}
          isValid={touched.password && isPasswordValid}
          placeholder="Enter password"
        />
        <Form.Control.Feedback type="invalid">
          {passwordError}
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit" disabled={!isFormValid}>
        Submit
      </Button>
    </Form>
  );
};

export default ValidatedForm;