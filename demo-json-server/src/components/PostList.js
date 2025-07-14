import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Container, Button, ListGroup, Alert } from "react-bootstrap";

const PostList = ({ posts }) => {
    const [data, setData] = useState(posts || null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3000/posts");
                setData(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Lỗi khi lấy dữ liệu:", error);
                setLoading(false);
            }
        };
        if (!posts) fetchData();
    }, [posts]);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/posts/${id}`);
            setData(data.filter((post) => post.id !== id));
        } catch (error) {
            console.error("Lỗi khi xóa bài viết:", error);
        }
    };

    if (loading) return <div>Đang tải...</div>;
    if (!data || data.length === 0) return <div>Không có bài viết nào!</div>;

    return (
        <Container className="mt-5">
            <h1>Danh sách bài viết</h1>
            <Button variant="success" className="mb-3">
                <Link to="/create" style={{ color: "white", textDecoration: "none" }}>
                    Tạo bài viết mới
                </Link>
            </Button>
            <ListGroup>
                {data.map((post) => (
                    <ListGroup.Item key={post.id} className="d-flex justify-content-between align-items-center">
                        <div>
                            <h3>{post.title}</h3>
                            <p>{post.content}</p>
                        </div>
                        <div>
                            <Link to={`/edit/${post.id}`} className="btn btn-warning me-2">
                                Chỉnh sửa
                            </Link>
                            <Button variant="danger" onClick={() => handleDelete(post.id)}>
                                Xóa
                            </Button>
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    );
};

PostList.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
        })
    ),
};

export default PostList;