import React, { useState } from 'react';
import { Form, Button, Table, Modal, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addHomestay, deleteHomestay } from '../features/homestays/homestayThunks';

const AddHomestayPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const homestays = useSelector(state => state.homestays.data);
  const [newHomestay, setNewHomestay] = useState({
    name: '', description: '', price: '', currentPrice: '', image: ''
  });
  const [errors, setErrors] = useState({});
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [homestayToDelete, setHomestayToDelete] = useState(null);
  const [homestayToEdit, setHomestayToEdit] = useState(null);

  const validate = () => {
    const err = {};
    if (!newHomestay.name.trim()) err.name = 'Name is required.';
    if (!newHomestay.description.trim()) err.description = 'Description is required.';
    if (!newHomestay.price.trim()) err.price = 'Price is required.';
    else if (isNaN(newHomestay.price)) err.price = 'Price must be a number.';
    if (!newHomestay.currentPrice.trim()) err.currentPrice = 'Discounted price is required.';
    else if (isNaN(newHomestay.currentPrice)) err.currentPrice = 'Discounted price must be a number.';
    if (!newHomestay.image.trim()) err.image = 'Image URL is required.';
    return err;
  };

  const handleAddConfirmed = () => {
    setShowAddModal(false);
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    dispatch(addHomestay(newHomestay));
    setNewHomestay({ name: '', description: '', price: '', currentPrice: '', image: '' });
    setErrors({});
  };

  const handleDeleteConfirmed = () => {
    if (homestayToDelete) {
      dispatch(deleteHomestay(homestayToDelete.id));
    }
    setShowDeleteModal(false);
    setHomestayToDelete(null);
  };

  const handleEditConfirmed = () => {
    if (homestayToEdit) {
      navigate(`/edit/${homestayToEdit.id}`);
    }
    setShowEditModal(false);
    setHomestayToEdit(null);
  };

  return (
    <div className="container mt-professional fade-in">
      <div className="page-header">
        <h3 className="mb-0 text-primary">
          <i className="fas fa-plus-circle me-2"></i>
          Add New Homestay
        </h3>
      </div>

      <div className="mb-4 d-flex justify-content-between align-items-center">
        <h4 className="mb-0 text-secondary">Homestay Information</h4>
        <Button variant="secondary" as={Link} to="/" className="shadow-sm">
          <i className="fas fa-arrow-left me-2"></i>Back to Home
        </Button>
      </div>

      {/* Show errors if any */}
      {Object.keys(errors).length > 0 && (
        <Alert variant="danger" className="shadow-sm">
          <Alert.Heading className="h6">
            <i className="fas fa-exclamation-triangle me-2"></i>
            Please check the following errors:
          </Alert.Heading>
          <ul className="mb-0 ps-3">
            {Object.values(errors).map((err, index) => (
              <li key={index}>{err}</li>
            ))}
          </ul>
        </Alert>
      )}

      {/* Form in card */}
      <div className="card shadow-professional mb-professional">
        <div className="card-body">
          <Form className="mb-0">
            {[
              { field: 'name', label: 'Homestay Name', type: 'text', icon: 'fa-home' },
              { field: 'description', label: 'Description', type: 'textarea', icon: 'fa-align-left' },
              { field: 'price', label: 'Original Price ($)', type: 'number', icon: 'fa-dollar-sign' },
              { field: 'currentPrice', label: 'Discounted Price ($)', type: 'number', icon: 'fa-tag' },
              { field: 'image', label: 'Image URL', type: 'url', icon: 'fa-image' }
            ].map(({ field, label, type, icon }) => (
              <Form.Group className="mb-3" key={field}>
                <Form.Label className="fw-semibold">
                  <i className={`fas ${icon} me-2 text-primary`}></i>
                  {label}
                </Form.Label>
                <Form.Control
                  type={type}
                  as={type === 'textarea' ? 'textarea' : 'input'}
                  rows={type === 'textarea' ? 3 : undefined}
                  value={newHomestay[field]}
                  onChange={e => setNewHomestay({ ...newHomestay, [field]: e.target.value })}
                  isInvalid={!!errors[field]}
                  className="shadow-sm"
                  placeholder={`Enter ${label.toLowerCase()}...`}
                />
                <Form.Control.Feedback type="invalid">{errors[field]}</Form.Control.Feedback>
              </Form.Group>
            ))}

            <div className="d-grid d-md-block">
              <Button
                variant="primary"
                onClick={() => setShowAddModal(true)}
                className="px-4"
                size="lg"
              >
                <i className="fas fa-plus me-2"></i>Add Homestay
              </Button>
            </div>
          </Form>
        </div>
      </div>

      {/* Homestay List */}
      <div className="card shadow-professional">
        <div className="card-header bg-light">
          <h4 className="mb-0 text-primary">
            <i className="fas fa-list me-2"></i>
            Homestay List ({homestays.length} items)
          </h4>
        </div>
        <div className="card-body p-0">
          {homestays.length === 0 ? (
            <div className="text-center py-5">
              <i className="fas fa-home fa-3x text-muted mb-3"></i>
              <h5 className="text-muted">No homestays yet</h5>
              <p className="text-muted">Add your first homestay above!</p>
            </div>
          ) : (
            <Table className="mb-0" striped hover responsive>
              <thead>
                <tr>
                  <th className="text-center">#</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th className="text-center">Original Price</th>
                  <th className="text-center">Current Price</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {homestays.map((homestay, index) => (
                  <tr key={homestay.id}>
                    <td className="text-center fw-bold">{index + 1}</td>
                    <td>
                      <div className="d-flex align-items-center">
                        {homestay.image && (
                          <img
                            src={homestay.image}
                            alt={homestay.name}
                            style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                            className="rounded me-2"
                            onError={(e) => { e.target.style.display = 'none'; }}
                          />
                        )}
                        <strong>{homestay.name}</strong>
                      </div>
                    </td>
                    <td className="text-muted">{homestay.description}</td>
                    <td className="text-center">
                      <span className="price-original">${homestay.price}</span>
                    </td>
                    <td className="text-center">
                      <span className="price-current">${homestay.currentPrice}</span>
                    </td>
                    <td>
                      <div className="action-buttons">
                        <Button
                          variant="warning"
                          size="sm"
                          className="me-1"
                          onClick={() => {
                            setHomestayToEdit(homestay);
                            setShowEditModal(true);
                          }}
                        >
                          <i className="fas fa-edit me-1"></i>Edit
                        </Button>
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => {
                            setHomestayToDelete(homestay);
                            setShowDeleteModal(true);
                          }}
                        >
                          <i className="fas fa-trash me-1"></i>Delete
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </div>
      </div>

      {/* Modal Confirm Add */}
      <Modal show={showAddModal} onHide={() => setShowAddModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <i className="fas fa-question-circle me-2 text-primary"></i>
            Confirm Addition
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <i className="fas fa-home fa-3x text-primary mb-3"></i>
            <p className="mb-0">Are you sure you want to add this homestay?</p>
            <small className="text-muted">This action will add "{newHomestay.name}" to your listing.</small>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddModal(false)}>
            <i className="fas fa-times me-2"></i>Cancel
          </Button>
          <Button variant="primary" onClick={handleAddConfirmed}>
            <i className="fas fa-check me-2"></i>Confirm Add
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal Confirm Delete */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <i className="fas fa-exclamation-triangle me-2 text-danger"></i>
            Confirm Deletion
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <i className="fas fa-trash-alt fa-3x text-danger mb-3"></i>
            <p className="mb-2">Are you sure you want to delete <strong>"{homestayToDelete?.name}"</strong>?</p>
            <small className="text-muted">This action cannot be undone.</small>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            <i className="fas fa-times me-2"></i>Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteConfirmed}>
            <i className="fas fa-trash me-2"></i>Delete
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal Confirm Edit */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <i className="fas fa-edit me-2 text-warning"></i>
            Confirm Edit
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <i className="fas fa-edit fa-3x text-warning mb-3"></i>
            <p className="mb-0">Do you want to edit homestay <strong>"{homestayToEdit?.name}"</strong>?</p>
            <small className="text-muted">You will be redirected to the edit page.</small>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            <i className="fas fa-times me-2"></i>Cancel
          </Button>
          <Button variant="warning" onClick={handleEditConfirmed}>
            <i className="fas fa-edit me-2"></i>Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddHomestayPage;