import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import { Navbar, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MotobikesList from './components/MotorBikeManagement';
import { MotorbikesProvider } from './context/MotorbikeContext';
import MotobikesDetail from './components/MotorbikesDetails';

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
            <Navbar.Brand>Motobikes Manager</Navbar.Brand>
            <div>
              <span className="me-3">👋 Hello, {user.username}</span>
              <Button variant="outline-danger" onClick={handleLogout}>Logout</Button>
            </div>
          </Container>
        </Navbar>
      )}

      <MotorbikesProvider>
        <Routes>
          <Route path="/" element={<LoginPage setUser={setUser} />} />
          <Route
            path="/motorbikes"
            element={user ? <MotobikesList user={user} /> : <Navigate to="/" />}
          />
          <Route
            path="/view/:id"
            element={user ? <MotobikesDetail /> : <Navigate to="/" />}
          />
        </Routes>
      </MotorbikesProvider>

    </>
  );
}

export default App;
