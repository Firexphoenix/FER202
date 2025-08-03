import React, { useEffect, useState } from 'react';
import { Form, Button, Alert, Spinner } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateHomestay, fetchHomestays } from '../features/homestays/homestayThunks';

const EditHomestayPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const homestays = useSelector(state => state.homestays.data);
  const loading = useSelector(state => state.homestays.loading);
  const existingHomestay = homestays.find(h => h.id === id);

  const [homestay, setHomestay] = useState({
    name: '', description: '', price: '', currentPrice: '', image: ''
  });
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!existingHomestay && !loading) {
      dispatch(fetchHomestays());
    } else if (existingHomestay) {
      setHomestay(existingHomestay);
    }
  }, [dispatch, existingHomestay, loading]);

  const validate = () => {
    const newErrors = {};
    if (!homestay.name.trim()) newErrors.name = 'Name cannot be empty';
    if (!homestay.description.trim()) newErrors.description = 'Description cannot be empty';
    if (!homestay.price.trim()) newErrors.price = 'Price cannot be empty';
    else if (isNaN(homestay.price)) newErrors.price = 'Price must be a number';
    if (!homestay.currentPrice.trim()) newErrors.currentPrice = 'Discounted price cannot be empty';
    else if (isNaN(homestay.currentPrice)) newErrors.currentPrice = 'Discounted price must be a number';
    if (!homestay.image.trim()) newErrors.image = 'Image URL cannot be empty';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHomestay({ ...homestay, [name]: value });
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowAlert(false);
    setSuccessMessage('');

    if (!validate()) {
      setShowAlert(true);
      return;
    }

    setIsSubmitting(true);
    try {
      await dispatch(updateHomestay(homestay));
      setSuccessMessage('✅ Updated successfully!');
      setShowAlert(false);

      // Redirect after 2 seconds
      setTimeout(() => {
        navigate(`/homestays/${id}`);
      }, 2000);
    } catch (error) {
      setErrors({ submit: 'Error updating homestay. Please try again.' });
      setShowAlert(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="container mt-professional fade-in text-center">
        <div className="py-5">
          <Spinner animation="border" className="me-2" />
          <span className="text-muted">Loading homestay data...</span>
        </div>
      </div>
    );
  }

  // If homestay not found after loading
  if (!loading && !homestay.name) {
    return (
      <div className="container mt-professional fade-in text-center">
        <div className="py-5">
          <i className="fas fa-home fa-3x text-muted mb-3"></i>
          <h4 className="text-muted">Homestay Not Found</h4>
          <p className="text-muted">The homestay you're looking for doesn't exist.</p>
          <Button variant="primary" onClick={() => navigate('/')}>
            <i className="fas fa-arrow-left me-2"></i>Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-professional fade-in">
      <div className="page-header">
        <h2 className="mb-0 text-primary">
          <i className="fas fa-edit me-2"></i>
          Update Homestay
        </h2>
      </div>

      <div className="mb-4">
        <Button variant="outline-secondary" onClick={() => navigate('/')} className="shadow-sm">
          <i className="fas fa-arrow-left me-2"></i>Back to Home
        </Button>
      </div>

      {/* Error Alert */}
      {showAlert && Object.keys(errors).length > 0 && (
        <Alert variant="danger" className="shadow-sm" onClose={() => setShowAlert(false)} dismissible>
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

      {/* Success Alert */}
      {successMessage && (
        <Alert variant="success" className="shadow-sm d-flex align-items-center" onClose={() => setSuccessMessage('')} dismissible>
          <i className="fas fa-check-circle me-2"></i>
          {successMessage}
          <small className="ms-2 text-muted">Redirecting to details page...</small>
        </Alert>
      )}

      {/* Form in card */}
      <div className="card shadow-professional">
        <div className="card-header bg-light">
          <h4 className="mb-0 text-secondary">
            <i className="fas fa-info-circle me-2"></i>
            Homestay Information
          </h4>
        </div>
        <div className="card-body">
          <Form onSubmit={handleSubmit}>
            {[
              { field: 'name', label: 'Homestay Name', type: 'text', icon: 'fa-home' },
              { field: 'description', label: 'Description', type: 'textarea', icon: 'fa-align-left' },
              { field: 'price', label: 'Original Price ($)', type: 'number', icon: 'fa-dollar-sign' },
              { field: 'currentPrice', label: 'Discounted Price ($)', type: 'number', icon: 'fa-tag' },
              { field: 'image', label: 'Image URL', type: 'url', icon: 'fa-image' }
            ].map(({ field, label, type, icon }) => (
              <Form.Group controlId={field} className="mb-4" key={field}>
                <Form.Label className="fw-semibold">
                  <i className={`fas ${icon} me-2 text-primary`}></i>
                  {label}
                </Form.Label>
                <Form.Control
                  type={type}
                  as={type === 'textarea' ? 'textarea' : 'input'}
                  name={field}
                  value={homestay[field]}
                  onChange={handleChange}
                  isInvalid={!!errors[field]}
                  className="shadow-sm"
                  rows={type === 'textarea' ? 4 : undefined}
                  placeholder={`Enter ${label.toLowerCase()}...`}
                  disabled={isSubmitting}
                />
                <Form.Control.Feedback type="invalid">{errors[field]}</Form.Control.Feedback>

                {/* Preview for image URL */}
                {field === 'image' && homestay.image && (
                  <div className="mt-2">
                    <small className="text-muted">Preview:</small>
                    <div className="mt-1">
                      <img
                        src={homestay.image}
                        alt="Preview"
                        style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                        className="rounded shadow-sm"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'block';
                        }}
                      />
                      <div style={{ display: 'none' }} className="text-danger small">
                        <i className="fas fa-exclamation-triangle me-1"></i>
                        Invalid image URL
                      </div>
                    </div>
                  </div>
                )}
              </Form.Group>
            ))}

            <div className="d-flex gap-2 justify-content-end pt-3 border-top">
              <Button
                variant="secondary"
                onClick={() => navigate('/')}
                disabled={isSubmitting}
              >
                <i className="fas fa-times me-2"></i>Cancel
              </Button>
              <Button
                variant="primary"
                type="submit"
                className="px-4"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Spinner animation="border" size="sm" className="me-2" />
                    Updating...
                  </>
                ) : (
                  <>
                    <i className="fas fa-save me-2"></i>Save Changes
                  </>
                )}
              </Button>
            </div>
          </Form>
        </div>
      </div>

      {/* Additional Info Card */}
      <div className="card shadow-sm mt-4">
        <div className="card-body">
          <div className="row text-center">
            <div className="col-md-4">
              <i className="fas fa-shield-alt fa-2x text-success mb-2"></i>
              <h6>Secure Updates</h6>
              <small className="text-muted">Your changes are saved securely</small>
            </div>
            <div className="col-md-4">
              <i className="fas fa-history fa-2x text-info mb-2"></i>
              <h6>Auto Save</h6>
              <small className="text-muted">Progress is automatically saved</small>
            </div>
            <div className="col-md-4">
              <i className="fas fa-mobile-alt fa-2x text-warning mb-2"></i>
              <h6>Mobile Friendly</h6>
              <small className="text-muted">Edit from any device</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditHomestayPage;