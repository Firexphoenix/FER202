import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, deleteProduct, updateProduct } from '../redux/actions/productActions';

const ProductList = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products.productList);
  const [editingProductId, setEditingProductId] = useState(null);
  const [editForm, setEditForm] = useState({});

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  const handleEditClick = (product) => {
    setEditingProductId(product.id);
    setEditForm(product);
  };

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    const updated = {
      ...editForm,
      price: parseFloat(editForm.price),
      catalogs: editForm.catalogs.split(',').map((c) => c.trim()),
    };
    dispatch(updateProduct(updated));
    setEditingProductId(null);
  };

  return (
    <div>
      <h2>📦 Product List</h2>
      {productList.length === 0 ? (
        <p>Loading products...</p>
      ) : (
        <div className="row">
          {productList.map((product) => (
            <div key={product.id} className="col-md-4 mb-3">
              <div className="card h-100">
                <div className="card-body">
                  {editingProductId === product.id ? (
                    <>
                      <input name="name" value={editForm.name} onChange={handleEditChange} className="form-control mb-1" />
                      <input name="price" value={editForm.price} onChange={handleEditChange} className="form-control mb-1" />
                      <textarea name="description" value={editForm.description} onChange={handleEditChange} className="form-control mb-1" />
                      <input name="catalogs" value={editForm.catalogs} onChange={handleEditChange} className="form-control mb-2" />
                      <button className="btn btn-sm btn-primary me-2" onClick={handleUpdate}>Save</button>
                      <button className="btn btn-sm btn-secondary" onClick={() => setEditingProductId(null)}>Cancel</button>
                    </>
                  ) : (
                    <>
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">💵 ${product.price}</p>
                      <p className="card-text">{product.description}</p>
                      <p className="card-text text-muted">🏷 {product.catalogs.join(', ')}</p>
                      <button className="btn btn-sm btn-success me-2" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                      <button className="btn btn-sm btn-warning me-2" onClick={() => handleEditClick(product)}>Edit</button>
                      <button className="btn btn-sm btn-danger" onClick={() => handleDelete(product.id)}>Delete</button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
