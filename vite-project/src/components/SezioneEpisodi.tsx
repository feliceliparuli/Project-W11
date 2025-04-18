import { Container, Row, Col } from "react-bootstrap";
import CardEpisodio from "./CardEpisodio.tsx";

const SezioneEpisodi = () => {
  return (
    <Container fluid className="pt-5">
      <h4 className="text-white fw-bold mb-3">Nuovi episodi radio</h4>

      <div className="d-flex d-lg-none overflow-auto gap-3 px-3 scroll-snap-container">
        <div className="scroll-snap-item" style={{ minWidth: "200px" }}>
          <CardEpisodio
            image="../public/images/2a.png"
            title="Prólogo con Abuelo"
          />
        </div>
        <div className="scroll-snap-item" style={{ minWidth: "200px" }}>
          <CardEpisodio image="../public/images/2b.png" title="The Wanderer" />
        </div>
        <div className="scroll-snap-item" style={{ minWidth: "200px" }}>
          <CardEpisodio
            image="../public/images/2c.png"
            title="Michael Bublé & Carly Pearce"
          />
        </div>
        <div className="scroll-snap-item" style={{ minWidth: "200px" }}>
          <CardEpisodio
            image="../public/images/2d.png"
            title="Stephen Moccio: The Zane Lowe Interview"
          />
        </div>
        <div className="scroll-snap-item" style={{ minWidth: "200px" }}>
          <CardEpisodio
            image="../public/images/2e.png"
            title="Chart Spotlight: Julia Michaels"
          />
        </div>
      </div>

      {/* Desktop */}
      <Row className="d-none d-lg-flex pt-2 justify-content-between">
        <Col lg={2}>
          <CardEpisodio
            image="../public/images/2a.png"
            title="Prólogo con Abuelo"
          />
        </Col>
        <Col lg={2}>
          <CardEpisodio image="../public/images/2b.png" title="The Wanderer" />
        </Col>
        <Col lg={2}>
          <CardEpisodio
            image="../public/images/2c.png"
            title="Michael Bublé & Carly Pearce"
          />
        </Col>
        <Col lg={2}>
          <CardEpisodio
            image="../public/images/2d.png"
            title="Stephen Moccio: The Zane Lowe Interview"
          />
        </Col>
        <Col lg={2}>
          <CardEpisodio
            image="../public/images/2e.png"
            title="Chart Spotlight: Julia Michaels"
          />
        </Col>
        <Col lg={2}>
          <CardEpisodio
            image="../public/images/2f.png"
            title="Karri & Travis Mills"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default SezioneEpisodi;
