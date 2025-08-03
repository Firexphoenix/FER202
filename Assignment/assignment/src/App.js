import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/Header';
import BannerCarousel from './components/BannerCarousel';
import ProductList from './components/HomestayList';
import ProductDetail from './components/HomestayDetail';
import AddProductPage from './components/AddHomestayPage';
import EditProduct from './components/EditHomestay';
import LoginPage from './components/LoginPage';
import CartPage from './components/CartPage';
import CheckoutPage from './components/CheckoutPage';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const user = useSelector(state => state.auth.user);

  useEffect(() => {
    localStorage.removeItem('authUser'); // Chỉ dùng khi muốn clear login mỗi lần vào lại
  }, []);

  return (
    <Router>
      <Header />
      <div className="container mt-4">
        {!user && window.location.pathname !== "/login" && <Navigate to="/login" replace />}

        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={
            <PrivateRoute>
              <>
                <BannerCarousel />
                <ProductList />
              </>
            </PrivateRoute>
          } />
          <Route path="/homestays/:id" element={<PrivateRoute><ProductDetail /></PrivateRoute>} />
          <Route path="/add" element={
            <PrivateRoute roles={['admin']}>
              <AddProductPage />
            </PrivateRoute>
          } />
          <Route path="/edit/:id" element={
            <PrivateRoute roles={['admin']}>
              <EditProduct />
            </PrivateRoute>
          } />
          <Route path="/cart" element={<PrivateRoute><CartPage /></PrivateRoute>} />
          <Route path="/checkout" element={<PrivateRoute><CheckoutPage /></PrivateRoute>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
