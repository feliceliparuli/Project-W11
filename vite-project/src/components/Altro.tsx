import { Container, Row, Col, Button } from "react-bootstrap";

const titoli = [
  "Esplora per genere",
  "Decenni",
  "Attività e stati d’animo",
  "Worldwide",
  "Classifiche",
  "Audio spaziale",
  "Video musicali",
  "Nuovi artisti",
  "Hit del passato",
];

const Altro = () => {
  return (
    <Container fluid className=" pb-4">
      <h4 className="text-white fw-bold px-3 mb-3">Altro da esplorare </h4>
      <Row className="g-3 px-3">
        {titoli.map((t, i) => (
          <Col key={i} xs={6} md={4}>
            <Button
              variant="dark"
              className="w-100 text-start text-danger px-3 py-3 rounded-3 border-secondary d-flex "
            >
              <p className="m-0 flex-grow-1">{t}</p>
              &gt;
            </Button>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Altro;
