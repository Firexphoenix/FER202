import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button, Container, Alert } from "react-bootstrap";

// Component RegistrationForm
const RegistrationForm = ({ title, onSubmit }) => {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        email: "",
        phone: "",
        gender: "",
        terms: false,
    });
    const [errors, setErrors] = useState({});
    const [showAlert, setShowAlert] = useState(false);

    // Hàm xử lý thay đổi giá trị input
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    // Hàm validate dữ liệu
    const validateForm = () => {
        const newErrors = {};

        // Validate tên
        if (!formData.name) {
            newErrors.name = "Tên không được để trống!";
        } else if (formData.name.length < 3 || formData.name.length > 50) {
            newErrors.name = "Tên phải chứa từ 3 đến 50 ký tự!";
        }

        // Validate tuổi
        const age = parseInt(formData.age, 10);
        if (!formData.age) {
            newErrors.age = "Tuổi không được để trống!";
        } else if (isNaN(age) || age < 18 || age > 100) {
            newErrors.age = "Tuổi phải là số từ 18 đến 100!";
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) {
            newErrors.email = "Email không được để trống!";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Email không đúng định dạng!";
        }

        // Validate số điện thoại
        const phoneRegex = /^\d{10,15}$/;
        if (!formData.phone) {
            newErrors.phone = "Số điện thoại không được để trống!";
        } else if (!phoneRegex.test(formData.phone)) {
            newErrors.phone = "Số điện thoại phải chứa từ 10 đến 15 chữ số!";
        }

        // Validate giới tính
        if (!formData.gender) {
            newErrors.gender = "Vui lòng chọn giới tính!";
        }

        // Validate điều khoản
        if (!formData.terms) {
            newErrors.terms = "Bạn phải đồng ý với điều khoản!";
        }

        setErrors(newErrors);
        setShowAlert(Object.keys(newErrors).length > 0);
        return Object.keys(newErrors).length === 0;
    };

    // Hàm xử lý submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            onSubmit(formData);
            setShowAlert(false);
        }
    };

    return (
        <Container>
            <h3>{title}</h3>

            {/* Hiển thị Alert nếu có lỗi */}
            {showAlert && (
                <Alert variant="danger">
                    <strong>Lỗi:</strong> Vui lòng kiểm tra lại thông tin.
                </Alert>
            )}

            <Form onSubmit={handleSubmit}>
                {/* Trường tên */}
                <Form.Group controlId="formName">
                    <Form.Label>Tên</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.name}
                    </Form.Control.Feedback>
                </Form.Group>

                {/* Trường tuổi */}
                <Form.Group controlId="formAge">
                    <Form.Label>Tuổi</Form.Label>
                    <Form.Control
                        type="text"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        isInvalid={!!errors.age}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.age}
                    </Form.Control.Feedback>
                </Form.Group>

                {/* Trường email */}
                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.email}
                    </Form.Control.Feedback>
                </Form.Group>

                {/* Trường số điện thoại */}
                <Form.Group controlId="formPhone">
                    <Form.Label>Số điện thoại</Form.Label>
                    <Form.Control
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        isInvalid={!!errors.phone}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.phone}
                    </Form.Control.Feedback>
                </Form.Group>

                {/* Trường giới tính */}
                <Form.Group controlId="formGender">
                    <Form.Label>Giới tính</Form.Label>
                    <Form.Select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        isInvalid={!!errors.gender}
                    >
                        <option value="">Chọn giới tính</option>
                        <option value="Nam">Nam</option>
                        <option value="Nữ">Nữ</option>
                        <option value="Khác">Khác</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                        {errors.gender}
                    </Form.Control.Feedback>
                </Form.Group>

                {/* Trường điều khoản */}
                <Form.Group controlId="formTerms">
                    <Form.Check
                        type="checkbox"
                        name="terms"
                        label="Đồng ý với điều khoản"
                        checked={formData.terms}
                        onChange={handleChange}
                        isInvalid={!!errors.terms}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.terms}
                    </Form.Control.Feedback>
                </Form.Group>

                {/* Nút submit */}
                <Button variant="primary" type="submit">
                    Đăng ký
                </Button>
            </Form>
        </Container>
    );
};

// Xác định PropTypes
RegistrationForm.propTypes = {
    title: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default RegistrationForm;