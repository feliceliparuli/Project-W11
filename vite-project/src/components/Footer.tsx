import { Container } from "react-bootstrap";

const Footer = function () {
  return (
    <Container fluid className="fw-semibold pt-5">
      <p>
        <span className="border-end border-secondary pe-2">Italia</span>
        <span className="text-secondary ps-2">English (UK)</span>
      </p>

      <div>
        <p className="text-secondary">
          Copyright &copy;<span>2024</span>{" "}
          <span className="text-white">Apple Inc.</span> Tutti i diritti
          riservati.
        </p>
        <ul className="d-flex g-3 list-unstyled m-0 pb-3">
          <li className="pe-2  border-end border-secondary">
            Condizioni dei servizi internet
          </li>
          <li className="pe-2 ps-2 border-end border-secondary">
            Apple Music e privacy
          </li>
          <li className="pe-2 ps-2 border-end border-secondary">
            Avviso sui cookie
          </li>
          <li className="pe-2 ps-2 border-end border-secondary">Supporto</li>
          <li className="pe-2 ps-2">Feedback</li>
        </ul>
      </div>
    </Container>
  );
};

export default Footer;
