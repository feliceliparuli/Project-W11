import { Nav, Form, Navbar, Container } from "react-bootstrap";

const Aside = () => {
  return (
    <Container fluid className="d-flex flex-column justify-content-center">
      <Nav className="flex-column gap-3 mt-4">
        <Navbar.Brand href="#" className="m-0 fw-bold text-center">
          <img
            src="/logos/music.svg"
            alt="Logo"
            className="d-inline-block align-top "
            style={{ filter: "invert(1)" }}
          />
        </Navbar.Brand>
        <Nav.Link
          href="#"
          className="d-flex align-items-center gap-2 text-center"
        >
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
    </Container>
  );
};

export default Aside;
