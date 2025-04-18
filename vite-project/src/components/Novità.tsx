import { Card, Container, Row, Col } from "react-bootstrap";
import "./Novità.css";

const Novità = () => {
  return (
    <>
      <div className="d-flex d-md-none overflow-auto gap-3 px-3 pt-3 scroll-snap-container">
        <div className="scroll-snap-item" style={{ minWidth: "300px" }}>
          <Card className="bg-dark border-0">
            <Card.Body>
              <Card.Title className=" text-secondary fw-semibold small mb-1">
                NUOVA STAZIONE RADIO
              </Card.Title>
              <Card.Text className="text-white fw-bold mb-2">
                Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill
              </Card.Text>
              <Card.Img src="../public/images/1a.png" />
            </Card.Body>
          </Card>
        </div>

        <div className="scroll-snap-item" style={{ minWidth: "300px" }}>
          <Card className="bg-dark border-0">
            <Card.Body>
              <Card.Title className=" text-secondary fw-semibold small mb-1">
                NUOVA STAZIONE RADIO
              </Card.Title>
              <Card.Text className="text-white fw-bold mb-2">
                Ecco la nuova casa della musica latina
              </Card.Text>
              <Card.Img src="../public/images/1b.png" />
            </Card.Body>
          </Card>
        </div>
      </div>

      {/* Desktop  */}

      <Container fluid className="d-none d-md-block px-3 pt-3">
        <Row className="g-4 align-items-stretch">
          <Col md={6}>
            <Card className="bg-dark border-0 rounded-4 overflow-hidden h-100 d-flex flex-column">
              <Card.Body className="flex-grow-1">
                <Card.Title className=" text-secondary fw-semibold small mb-1">
                  NUOVA STAZIONE RADIO
                </Card.Title>
                <Card.Text className="text-white fw-bold mb-3">
                  Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill
                </Card.Text>
              </Card.Body>
              <Card.Img
                src="/images/1a.png"
                style={{ objectFit: "cover", height: "300px" }}
              />
            </Card>
          </Col>

          <Col md={6}>
            <Card className="bg-dark border-0 rounded-4 overflow-hidden h-100 d-flex flex-column">
              <Card.Body className="flex-grow-1">
                <Card.Title className=" text-secondary fw-semibold small mb-1">
                  NUOVA STAZIONE RADIO
                </Card.Title>
                <Card.Text className="text-white fw-bold mb-3">
                  Ecco la nuova casa della musica latina
                </Card.Text>
              </Card.Body>
              <Card.Img
                src="/images/1b.png"
                style={{ objectFit: "cover", height: "300px" }}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Novità;
