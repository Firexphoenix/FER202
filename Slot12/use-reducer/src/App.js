import React, { useState } from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Counter from "./components/Counter";
import ChangeNameAge from "./components/ChangeNameAge";
import ItemList from "./components/ItemList";
import QuestionBank from "./components/QuestionBank";

function App() {
  const [activeComponent, setActiveComponent] = useState("Ex1");

  const renderComponent = () => {
    switch (activeComponent) {
      case "Ex1":
        return <Counter />;
      case "Ex2":
        return <ChangeNameAge />;
      case "Ex3":
        return <ItemList />;
      case "Ex4":
        return <QuestionBank />;
      default:
        return <Counter />;
    }
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="navbar-custom">
        <Container>
          <Navbar.Brand href="#home" className="me-4">Exercise Dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                onClick={() => setActiveComponent("Ex1")}
                active={activeComponent === "Ex1"}
                className="nav-link-custom"
              >
                Ex1
              </Nav.Link>
              <Nav.Link
                onClick={() => setActiveComponent("Ex2")}
                active={activeComponent === "Ex2"}
                className="nav-link-custom"
              >
                Ex2
              </Nav.Link>
              <Nav.Link
                onClick={() => setActiveComponent("Ex3")}
                active={activeComponent === "Ex3"}
                className="nav-link-custom"
              >
                Ex3
              </Nav.Link>
              <Nav.Link
                onClick={() => setActiveComponent("Ex4")}
                active={activeComponent === "Ex4"}
                className="nav-link-custom"
              >
                Ex4
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Row>
          <Col>
            <h1>{activeComponent}</h1>
            {renderComponent()}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;