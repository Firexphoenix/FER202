import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Card, Spinner, Alert, Button } from 'react-bootstrap';

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const response = await fetch('/posts.json');
        
        if (!response.ok) {
          throw new Error('Không thể tải dữ liệu từ server');
        }
        
        const data = await response.json();
        const foundPost = data.find(p => p.id === id);
        
        if (!foundPost) {
          setError('Không tìm thấy bài viết với ID này');
        } else {
          setPost(foundPost);
        }
      } catch (err) {
        console.error('Error loading post:', err);
        setError('Có lỗi xảy ra khi tải bài viết');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
        <div className="text-center">
          <Spinner animation="border" role="status" className="mb-3">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <p>Đang tải chi tiết bài viết...</p>
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
          <hr />
          <div className="d-flex justify-content-between">
            <Button as={Link} to="/posts" variant="outline-danger">
              ← Quay lại danh sách
            </Button>
          </div>
        </Alert>
      </Container>
    );
  }

  if (!post) {
    return (
      <Container>
        <Alert variant="warning">
          <Alert.Heading>⚠️ Không tìm thấy bài viết</Alert.Heading>
          <p>Bài viết với ID "{id}" không tồn tại.</p>
          <hr />
          <Button as={Link} to="/posts" variant="outline-warning">
            ← Quay lại danh sách
          </Button>
        </Alert>
      </Container>
    );
  }

  return (
    <Container>
      <div className="mb-3">
        <Button as={Link} to="/posts" variant="outline-secondary" size="sm">
          ← Quay lại danh sách
        </Button>
      </div>

      <Card className="shadow">
        <Card.Header className="bg-primary text-white">
          <h2 className="mb-0">📄 {post.title}</h2>
        </Card.Header>
        <Card.Body>
          <div className="mb-3">
            <small className="text-muted">
              <strong>ID:</strong> {post.id} | 
              <strong> Ngày tạo:</strong> {new Date().toLocaleDateString('vi-VN')}
            </small>
          </div>
          
          <Card.Text className="lead">
            {post.content}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="bg-light">
          <div className="d-flex justify-content-between align-items-center">
            <small className="text-muted">
              📊 Đây là chi tiết đầy đủ của bài viết
            </small>
            <Button as={Link} to="/posts" variant="primary" size="sm">
              📰 Xem tất cả bài viết
            </Button>
          </div>
        </Card.Footer>
      </Card>

      <div className="mt-4 p-3 bg-light rounded">
        <h5>ℹ️ Thông tin về trang chi tiết:</h5>
        <ul className="mb-0">
          <li>ID bài viết được lấy từ URL parameter: <code>/post/{id}</code></li>
          <li>Sử dụng <code>useParams()</code> hook để lấy ID</li>
          <li>Dữ liệu được tìm kiếm từ file <code>posts.json</code></li>
          <li>Hiển thị chi tiết đầy đủ của bài viết</li>
        </ul>
      </div>
    </Container>
  );
}

export default PostDetail;
