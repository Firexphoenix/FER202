import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const students = [
    {
        id: 'DE160182',
        name: 'Nguyễn Hữu Quốc Khánh',
        location: 'DaNang',
        img: '/a1.jpg',
    },
    {
        id: 'DE160377',
        name: 'Choy Vinh Thiên',
        location: 'QuangNam',
        img: '/a2.jpg',
    },
    {
        id: 'DE160547',
        name: 'Đỗ Nguyễn Phúc',
        location: 'QuangNam',
        img: '/a3.jpg',
    },
    {
        id: 'DE170049',
        name: 'Lê Hoàng Minh',
        location: 'DaNang',
        img: '/a4.jpg',
    },
];

const StudentCard = ({ student, onStatusChange }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="col-md-3 mb-4">
            <div className="card shadow-sm">
                <img
                    src={student.img}
                    className="card-img-top img-fluid object-fit-cover"
                    alt={student.name}
                    style={{ height: '300px' }}
                />
                <div className="card-body">
                    <h5 className="card-title text-center">{student.name}</h5>
                    <p className="card-text text-center">
                        {student.id} <br /> {student.location}
                    </p>
                    <form onSubmit={handleSubmit}>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name={`attendance-${student.id}`}
                                id={`absent-${student.id}`}
                                checked={student.status === 'Absent'}
                                onChange={() => onStatusChange(student.id, 'Absent')}
                            />
                            <label className="form-check-label" htmlFor={`absent-${student.id}`}>
                                Absent
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name={`attendance-${student.id}`}
                                id={`present-${student.id}`}
                                checked={student.status === 'Present'}
                                onChange={() => onStatusChange(student.id, 'Present')}
                            />
                            <label className="form-check-label" htmlFor={`present-${student.id}`}>
                                Present
                            </label>
                        </div>
                        <button type="submit" className="btn btn-warning btn-sm mt-2 w-100">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

const Header = () => (
    <header>
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#ff9933' }}>
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img
                        src="/Logo.png"
                        alt="FPT University"
                        className="img-fluid"
                        style={{ width: '150px', height: '100px' }}
                    />
                </a>
                <div className="collapse navbar-collapse">
                    <div className="navbar-nav">
                        <span className="nav-item mx-2">🏠</span>
                        <a className="nav-link text-dark" href="#">Trang chủ</a>
                        <span className="nav-item mx-2">ℹ️</span>
                        <a className="nav-link text-dark" href="#">Ngành học</a>
                        <span className="nav-item mx-2">🪪</span>
                        <a className="nav-link text-dark" href="#">Tuyển sinh</a>
                        <span className="nav-item mx-2">📃</span>
                        <a className="nav-link text-dark" href="#">Sinh viên</a>
                    </div>
                </div>
                <form className="d-flex ms-auto">
                    <label htmlFor="search-input" className="me-2">Search</label>
                    <input
                        type="text"
                        className="form-control"
                        id="search-input"
                        aria-label="Search"
                        style={{ width: '200px' }}
                    />
                </form>
            </div>
        </nav>
    </header>
);

const Banner = () => (
    <div
        style={{ backgroundColor: "#ff8533" }}
    >
        <div className="container p-0">
            <img
                src="/a5.jpg"
                alt="Banner Image"
                className="img-fluid w-100"
                style={{ height: '100%', objectFit: 'cover' }}
            />
        </div>
    </div>
);

const Footer = () => (
    <footer className="text-white py-4"
        style={{
            backgroundColor: '#ff8533',
        }}
    >
        <div className="container d-flex justify-content-between align-items-center flex-column flex-md-row text-dark">
            <div>
                <h6>Our Address</h6>
                <p>11, Hà Huy Tập Đà Nẵng</p>
                <p>📞 +84023111111</p>
                <p>☎️ +852 8765 4321</p>
                <p>✉️ <a href="#" style={{ textDecoration: "none" }}>fptudn@fpt.edu.vn</a></p>
            </div>
            <div className="d-flex gap-3 mt-3 mt-md-0 text-white">
                <a href="#" className="text-white fs-4">G+</a>
                <a href="#" className="text-white fs-4">f</a>
                <a href="#" className="text-white fs-4">in</a>
                <a href="#" className="text-white fs-4">🐦</a>
                <a href="#" className="text-white fs-4">📺</a>
                <a href="#" className="text-white fs-4">✉</a>
            </div>
        </div>
        <div className="text-center mt-3 text-dark">© Copyright 2023</div>
    </footer>
);

const Exercise5 = () => {
    const [studentList, setStudentList] = useState(
        students.map((student) => ({ ...student, status: 'Absent' }))
    );

    const handleStatusChange = (id, newStatus) => {
        setStudentList((prevList) =>
            prevList.map((student) =>
                student.id === id ? { ...student, status: newStatus } : student
            )
        );
    };

    return (
        <div>
            <Header />
            <Banner />
            <div className="container">
                <nav
                    aria-label="breadcrumb"
                    style={{
                        backgroundColor: "#a6a6a6",
                        padding: "10px",
                        textAlign: "center",
                        marginRight:"88%",
                        borderRadius: "8px",
                    }}
                >
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="#">
                                Home
                            </a>
                        </li>
                        <li
                            className="breadcrumb-item active"
                            aria-current="page"
                        >
                            Students
                        </li>
                    </ol>
                </nav>
            </div>
            <div className="container mt-4">
                <div className="text-center mb-4">
                    <h2>Students Detail</h2>
                </div>
                <div className="row">
                    {studentList.map((student) => (
                        <StudentCard
                            key={student.id}
                            student={student}
                            onStatusChange={handleStatusChange}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </div >
    );
};

export default Exercise5;