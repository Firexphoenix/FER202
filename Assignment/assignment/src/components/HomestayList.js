import React, { useEffect } from 'react';
import { Card, Button, Alert, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHomestays } from '../features/homestays/homestayThunks';
import { addToCart } from '../features/cart/cartSlice';

const HomestayList = () => {
  const dispatch = useDispatch();
  const { data: homestays, loading, error } = useSelector((state) => state.homestays);

  useEffect(() => {
    dispatch(fetchHomestays());
  }, [dispatch]);

  return (
    <div className="container px-4">
      <h2 className="mb-4 text-center fw-bold">Homestay Listing</h2>

      {loading && (
        <div className="text-center my-4">
          <Spinner animation="border" />
        </div>
      )}

      {error && <Alert variant="danger">{error}</Alert>}

      <div className="mb-3 text-end">
        <Button variant="primary" as={Link} to="/add">
          + Add New Homestay
        </Button>
      </div>

      <div className="row justify-content-center">
        {homestays.map((homestay) => (
          <div className="col-sm-6 col-md-4 col-lg-3 mb-4 d-flex" key={homestay.id}>
            <Card className="w-100 shadow rounded-4 text-center">
              {homestay.image && (
                <Card.Img
                  variant="top"
                  src={homestay.image}
                  alt={homestay.name}
                  style={{
                    height: '200px',
                    objectFit: 'cover',
                    borderTopLeftRadius: '1rem',
                    borderTopRightRadius: '1rem',
                  }}
                />
              )}
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title className="fw-semibold fs-5">{homestay.name}</Card.Title>
                  <Card.Text className="text-muted small">{homestay.description}</Card.Text>
                </div>
                <div>
                  <Card.Text className="my-2">
                    <del className="text-muted">{homestay.price}đ</del>
                    <br />
                    <strong className="text-danger fs-5">{homestay.currentPrice}đ</strong>
                  </Card.Text>

                  <Button
                    variant="outline-info"
                    as={Link}
                    to={`/homestays/${homestay.id}`}
                    className="w-100 mb-2 rounded-pill"
                  >
                    View Details
                  </Button>

                  <Button
                    variant="outline-success"
                    className="w-100 rounded-pill"
                    onClick={() => dispatch(addToCart(homestay))}
                  >
                    Add to Cart
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomestayList;
