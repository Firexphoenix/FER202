// components/ProductForm.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addProduct } from '../redux/actions/productActions';

const ProductForm = () => {
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        price: '',
        description: '',
        catalogs: '',
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            ...formData,
            price: parseFloat(formData.price),
            catalogs: formData.catalogs.split(',').map((cat) => cat.trim()),
        };
        dispatch(addProduct(newProduct));
        navigate('/');
    };

    return (
        <div>
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit} className="row g-3">
                <div className="col-md-6">
                    <label className="form-label">ID</label>
                    <input type="text" className="form-control" name="id" value={formData.id} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Price</label>
                    <input type="number" step="0.01" className="form-control" name="price" value={formData.price} onChange={handleChange} required />
                </div>
                <div className="col-12">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" name="description" value={formData.description} onChange={handleChange} required />
                </div>
                <div className="col-12">
                    <label className="form-label">Catalogs (comma separated)</label>
                    <input type="text" className="form-control" name="catalogs" value={formData.catalogs} onChange={handleChange} required />
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Add Product</button>
                </div>
            </form>
        </div>
    );
};

export default ProductForm;
