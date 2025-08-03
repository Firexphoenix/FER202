import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, Button, Container, Row, Col, Badge, Breadcrumb } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHomestays } from '../features/homestays/homestayThunks';

const HomestayDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const homestays = useSelector(state => state.homestays.data);
  const loading = useSelector(state => state.homestays.loading);
  const homestay = homestays.find(h => h.id === id);

  useEffect(() => {
    if (!homestay) {
      dispatch(fetchHomestays());
    }
  }, [dispatch, homestay]);

  if (loading || !homestay) {
    return (
      <Container className="my-5">
        <div className="text-center mt-professional">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Đang tải...</span>
          </div>
          <p className="mt-3" style={{ color: 'var(--text-secondary)' }}>Đang tải thông tin homestay...</p>
        </div>
      </Container>
    );
  }

  return (
    <Container className="my-5 fade-in">
      {/* Breadcrumb Navigation */}
      <Breadcrumb className="mb-professional">
        <Breadcrumb.Item
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer' }}
        >
          Trang chủ
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Chi tiết homestay</Breadcrumb.Item>
      </Breadcrumb>

      {/* Page Header */}
      <div className="page-header mb-professional">
        <h2>Thông tin chi tiết</h2>
      </div>

      <Row className="justify-content-center">
        <Col lg={10} xl={8}>
          <Card className="card shadow-professional-lg">
            {homestay?.image && (
              <div className="position-relative">
                <Card.Img
                  variant="top"
                  src={homestay.image}
                  alt={homestay.name}
                  style={{
                    height: '400px',
                    objectFit: 'cover',
                    borderRadius: 'var(--border-radius-lg) var(--border-radius-lg) 0 0'
                  }}
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <div className="position-absolute top-0 end-0 p-3">
                  <Badge className="status-badge status-available">
                    Có sẵn
                  </Badge>
                </div>
              </div>
            )}

            <Card.Body style={{ padding: '2rem' }}>
              <div className="text-center mb-4">
                <Card.Title
                  className="mb-3"
                  style={{
                    fontSize: '2rem',
                    fontWeight: '700',
                    color: 'var(--text-primary)'
                  }}
                >
                  {homestay.name}
                </Card.Title>

                <Card.Text
                  className="mb-4"
                  style={{
                    fontSize: '1.1rem',
                    color: 'var(--text-secondary)',
                    fontStyle: 'italic',
                    lineHeight: '1.6'
                  }}
                >
                  {homestay.description}
                </Card.Text>

                {/* Price Section */}
                <div className="mb-4 p-3" style={{
                  backgroundColor: 'var(--light-bg)',
                  borderRadius: 'var(--border-radius)',
                  border: '1px solid var(--border-color)'
                }}>
                  <div className="d-flex justify-content-center align-items-center gap-3">
                    {homestay.price && (
                      <span className="price-original">
                        {homestay.price}
                      </span>
                    )}
                    <span className="price-current">
                      {homestay.currentPrice}
                    </span>
                  </div>
                  <small style={{ color: 'var(--text-muted)' }}>
                    Giá mỗi đêm (đã bao gồm thuế)
                  </small>
                </div>

                {/* Additional Info Section */}
                <Row className="mb-4">
                  <Col md={4} className="mb-3">
                    <div className="p-3" style={{
                      backgroundColor: 'white',
                      border: '1px solid var(--border-color)',
                      borderRadius: 'var(--border-radius)',
                      boxShadow: 'var(--shadow-sm)'
                    }}>
                      <h6 style={{ color: 'var(--text-primary)', fontWeight: '600' }}>
                        Loại phòng
                      </h6>
                      <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
                        Phòng đơn
                      </p>
                    </div>
                  </Col>
                  <Col md={4} className="mb-3">
                    <div className="p-3" style={{
                      backgroundColor: 'white',
                      border: '1px solid var(--border-color)',
                      borderRadius: 'var(--border-radius)',
                      boxShadow: 'var(--shadow-sm)'
                    }}>
                      <h6 style={{ color: 'var(--text-primary)', fontWeight: '600' }}>
                        Sức chứa
                      </h6>
                      <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
                        2 khách
                      </p>
                    </div>
                  </Col>
                  <Col md={4} className="mb-3">
                    <div className="p-3" style={{
                      backgroundColor: 'white',
                      border: '1px solid var(--border-color)',
                      borderRadius: 'var(--border-radius)',
                      boxShadow: 'var(--shadow-sm)'
                    }}>
                      <h6 style={{ color: 'var(--text-primary)', fontWeight: '600' }}>
                        Đánh giá
                      </h6>
                      <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
                        ⭐ 4.8/5
                      </p>
                    </div>
                  </Col>
                </Row>

                {/* Action Buttons */}
                <div className="action-buttons">
                  <Button
                    variant="primary"
                    size="lg"
                    className="btn-primary"
                    onClick={() => {
                      // Handle booking logic here
                      alert('Tính năng đặt phòng sẽ được triển khai sau!');
                    }}
                  >
                    Đặt phòng ngay
                  </Button>

                  <Button
                    variant="outline-info"
                    size="lg"
                    className="btn-outline-info"
                    onClick={() => {
                      // Handle contact logic here
                      alert('Tính năng liên hệ sẽ được triển khai sau!');
                    }}
                  >
                    Liên hệ chủ nhà
                  </Button>

                  <Button
                    variant="secondary"
                    size="lg"
                    className="btn-secondary"
                    onClick={() => navigate('/')}
                  >
                    Về trang chủ
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>

          {/* Additional Features Section */}
          <Card className="card shadow-professional mt-4">
            <Card.Body style={{ padding: '1.5rem' }}>
              <h4 className="mb-3" style={{ color: 'var(--text-primary)' }}>
                Tiện nghi nổi bật
              </h4>
              <Row>
                <Col md={6}>
                  <ul style={{ color: 'var(--text-secondary)' }}>
                    <li>WiFi miễn phí</li>
                    <li>Điều hòa nhiệt độ</li>
                    <li>TV màn hình phẳng</li>
                    <li>Phòng tắm riêng</li>
                  </ul>
                </Col>
                <Col md={6}>
                  <ul style={{ color: 'var(--text-secondary)' }}>
                    <li>Bữa sáng miễn phí</li>
                    <li>Bãi đậu xe miễn phí</li>
                    <li>Dịch vụ giặt ủi</li>
                    <li>Hỗ trợ 24/7</li>
                  </ul>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HomestayDetail;