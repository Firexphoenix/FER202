import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Container, Button, Alert } from "react-bootstrap";

const DeletePost = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleDelete = async () => {
        if (window.confirm("Bạn có chắc muốn xóa bài viết này?")) {
            try {
                await axios.delete(`http://localhost:3000/posts/${id}`);
                navigate("/");
            } catch (error) {
                console.error("Lỗi khi xóa bài viết:", error);
            }
        }
    };

    return (
        <Container className="mt-5">
            <h1>Xác nhận xóa bài viết</h1>
            <Alert variant="warning">
                Bạn chắc chắn muốn xóa bài viết với ID: {id}?
            </Alert>
            <Button variant="danger" onClick={handleDelete} className="me-2">
                Xóa
            </Button>
            <Button variant="secondary" onClick={() => navigate("/")}>
                Hủy
            </Button>
        </Container>
    );
};

DeletePost.propTypes = {
    id: PropTypes.string.isRequired,
};

export default DeletePost;