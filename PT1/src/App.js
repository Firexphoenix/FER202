import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import LaptopList from './components/LaptopList';
import LaptopDetail from './components/LaptopDetail';
import { Navbar, Container, Button } from 'react-bootstrap';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <AppLayout user={user} setUser={setUser} />
    </BrowserRouter>
  );
}

// Tách layout và định tuyến thành 1 component riêng để dùng useNavigate
function AppLayout({ user, setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);       // Xoá user
    navigate('/');       // Quay lại trang đăng nhập
  };

  return (
    <>
      {/* Hiện navbar khi user đã đăng nhập */}
      {user && (
        <Navbar bg="light" className="mb-3">
          <Container className="d-flex justify-content-between">
            <Navbar.Brand>Laptop Manager</Navbar.Brand>
            <div>
              <span className="me-3">👋 Hello, {user.username}</span>
              <Button variant="outline-danger" onClick={handleLogout}>Logout</Button>
            </div>
          </Container>
        </Navbar>
      )}

      {/* Các route */}
      <Routes>
        <Route path="/" element={<LoginPage setUser={setUser} />} />
        <Route
          path="/laptops"
          element={user ? <LaptopList user={user} /> : <Navigate to="/" />}
        />
        <Route
          path="/laptops/:id"
          element={user ? <LaptopDetail /> : <Navigate to="/" />}
        />
        <Route path="*" element={<h1 className="text-center mt-5">404 Page Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
