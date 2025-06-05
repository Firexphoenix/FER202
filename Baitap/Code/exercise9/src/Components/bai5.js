import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Navbar, Nav, Image, Row, Col } from 'react-bootstrap';
import './bai5.css';
function Bai5() {
    return (
        <div>
            {/* Header */}
            <Navbar expand="lg" className="custom-header py-4">
                <Container>
                    <Row className="w-100">
                        
                        <Col xs={12} className="text-center">
                            <Image src="/logofpt.jpg" alt="FPT University" className="logo"/>
                        </Col>                      
                        <Col xs={12}>
                            <Nav className="justify-content-center">
                                <Nav.Link href="#" className="text-white">Home</Nav.Link>
                                <Nav.Link href="#about" className="text-white">About</Nav.Link>
                                <Nav.Link href="#contact" className="text-white">Contact</Nav.Link>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
            {/* About Section */}
            <Container className="custom-section" id="about">
                <Row>
                    <Col>
                        <h2>About</h2>
                        <p>This is the about section of the website.</p>
                    </Col>
                </Row>
            </Container>
            {/* Contact Section */}
            <Container className="custom-section" id="contact">
                <Row>
                    <Col>
                        <h2>Contact</h2>
                        <p>
                            For any inquiries, please contact us at{' '}
                            <a href="mailto:example@example.com">example@example.com</a>.
                        </p>
                    </Col>
                </Row>
            </Container>
            {/* Footer */}
            <footer className="custom-footer text-center py-3">
                © 2023 Website. All rights reserved.
            </footer>
        </div>
    );
}

export default Bai5;
