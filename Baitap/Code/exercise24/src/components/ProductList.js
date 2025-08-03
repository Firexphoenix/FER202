// components/ProductList.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/Action';

const products = [
  {
    id: '1',
    name: 'MacBook Pro',
    price: 1999,
    description: 'Apple laptop with M2 chip',
    catalogs: ['Apple', 'Laptop']
  },
  {
    id: '2',
    name: 'Dell XPS 13',
    price: 1299,
    description: 'Dell ultrabook with sleek design',
    catalogs: ['Dell', 'Laptop']
  },
  {
    id: '3',
    name: 'Asus ROG',
    price: 1799,
    description: 'Gaming laptop from Asus',
    catalogs: ['Asus', 'Gaming']
  }
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Product List</h2>
      {products.map(product => (
        <div key={product.id} style={{ borderBottom: '1px solid #ccc', marginBottom: 10 }}>
          <p><strong>{product.name}</strong> - ${product.price}</p>
          <p>{product.description}</p>
          <button onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
