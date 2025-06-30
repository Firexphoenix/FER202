import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Container, Row, Col, Spinner, Alert } from 'react-bootstrap';

function Post() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch('/posts.json');
        
        if (!response.ok) {
          throw new Error('Không thể tải dữ liệu từ server');
        }
        
        const data = await response.json();
        setPosts(data);
        setError(null);
      } catch (err) {
        console.error('Error loading posts:', err);
        setError('Có lỗi xảy ra khi tải danh sách bài viết');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);
  
  if (loading) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
        <div className="text-center">
          <Spinner animation="border" role="status" className="mb-3">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <p>Đang tải danh sách bài viết...</p>
        </div>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Alert variant="danger">
          <Alert.Heading>❌ Lỗi!</Alert.Heading>
          <p>{error}</p>
        </Alert>
      </Container>
    );
  }

  return (
    <Container>
      <div className="mb-4">
        <h2>📰 Danh Sách Bài Viết</h2>
        <p className="text-muted">
          Tổng cộng có <strong>{posts.length}</strong> bài viết
        </p>
      </div>

      {posts.length === 0 ? (
        <Alert variant="info">
          <Alert.Heading>📭 Không có bài viết nào</Alert.Heading>
          <p>Hiện tại chưa có bài viết nào được đăng.</p>
        </Alert>
      ) : (
        <Row>
          {posts.map(post => (
            <Col key={post.id} lg={4} md={6} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title className="text-primary">
                    {post.title}
                  </Card.Title>
                  <Card.Text className="text-muted">
                    {post.content.length > 100 
                      ? `${post.content.substring(0, 100)}...` 
                      : post.content
                    }
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="bg-transparent">
                  <Link 
                    to={`/post/${post.id}`} 
                    className="btn btn-outline-primary btn-sm"
                  >
                    👁️ Xem chi tiết
                  </Link>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      <div className="mt-4 p-3 bg-light rounded">
        <h5>ℹ️ Thông tin về dữ liệu:</h5>
        <ul className="mb-0">
          <li>Dữ liệu được đọc từ file <code>/public/posts.json</code></li>
          <li>Sử dụng <code>fetch()</code> API để lấy dữ liệu</li>
          <li>Hiển thị danh sách bài viết với React Bootstrap</li>
          <li>Mỗi bài viết có link đến trang chi tiết</li>
        </ul>
      </div>
    </Container>
  );
}

export default Post;
