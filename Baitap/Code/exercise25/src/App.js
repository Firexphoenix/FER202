import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import ProductForm from './components/ProductForm';
import { useDispatch } from 'react-redux';
import { fetchProducts } from './redux/actions/productActions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Router>
      <div className="container mt-4">
        <h1 className="text-center mb-4">🛒 Shopping Cart App</h1>
        <nav className="mb-4">
          <Link className="btn btn-primary me-2" to="/">Product List</Link>
          <Link className="btn btn-success me-2" to="/cart">Cart</Link>
          <Link className="btn btn-warning" to="/add">Add Product</Link>
        </nav>

        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/add" element={<ProductForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
