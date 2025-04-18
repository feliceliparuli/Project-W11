import { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  Offcanvas,
  Form,
  Button,
} from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow((prev) => !prev);
  const handleClose = () => setShow(false);

  return (
    <>
      <Navbar expand="lg" bg="dark" variant="dark" className="px-3">
        <Container
          fluid
          className="d-flex justify-content-between align-items-center"
        >
          <Button
            variant="outline-secondary"
            onClick={handleToggle}
            className="border-0 d-lg-none"
          >
            <i className="bi bi-list fs-3 text-white"></i>
          </Button>
          <div className="d-lg-flex align-items-center gap-3 d-none d-lg-inline-block">
            <i className="bi bi-shuffle opacity-50"></i>

            <i className="bi bi-skip-start opacity-50"></i>
            <i className="bi bi-play-fill opacity-50 fs-4"></i>
            <i className="bi bi-skip-end opacity-50"></i>
            <i className="bi bi-arrow-repeat opacity-50"></i>
          </div>
          <Navbar.Brand
            href="#"
            className="m-0 fw-bold text-center flex-grow-1  mx-5"
          >
            <img
              src="/logos/music.svg"
              alt="Logo"
              className="d-lg-none align-top"
              style={{ filter: "invert(1)", height: "24px" }}
            />
            <img
              src="/logos/apple.svg"
              alt="Logo"
              className="d-none d-lg-inline-block align-top bg"
              style={{ filter: "invert(1)", height: "24px" }}
            />
          </Navbar.Brand>
          <div className="d-lg-flex align-items-center gap-2 d-none d-lg-inline-block px-3">
            <i className="bi bi-volume-down text-secondary"></i>
            <Form.Range className="w-100 " style={{ maxWidth: "120px" }} />
          </div>
          <div className="d-lg-none" style={{ width: "36px" }} />{" "}
          <Button
            variant="link"
            className="text-danger fw-bold text-decoration-none d-none d-lg-inline"
          >
            Accedi
          </Button>
        </Container>
      </Navbar>

      <Offcanvas
        show={show}
        onHide={handleClose}
        className="bg-dark text-white"
        placement="start"
      >
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column gap-3">
            <Nav.Link href="#" className="d-flex align-items-center gap-2">
              <i className="bi bi-house text-danger"></i>
              <span className="text-white">Home</span>
            </Nav.Link>
            <Nav.Link
              href="#"
              className="d-flex align-items-center gap-2 bg-secondary"
            >
              <i className="bi bi-grid text-danger"></i>
              <span className="text-white">Novità</span>
            </Nav.Link>
            <Nav.Link href="#" className="d-flex align-items-center gap-2">
              <i className="bi bi-broadcast text-danger"></i>
              <span className="text-white">Radio</span>
            </Nav.Link>
            <Form className="mt-3">
              <Form.Control type="search" placeholder="Cerca" />
            </Form>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavBar;
