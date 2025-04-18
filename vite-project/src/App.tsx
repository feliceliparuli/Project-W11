import { Col, Container, Row } from "react-bootstrap";
import NavBar from "./components/Navbar";
import Novità from "./components/Novità";
import SezioneEpisodi from "./components/SezioneEpisodi";

import SezioneNuoveUscite from "./components/SezioneNuoveUscite.tsx";
import Altro from "./components/Altro.tsx";
import Footer from "./components/Footer.tsx";
import Aside from "./components/Aside.tsx";

const App = () => {
  return (
    <div className="bg-dark text-white min-vh-100">
      <Container fluid className="px-4 pt-4">
        <Row>
          <Col className="d-none d-lg-inline-block" lg={2}>
            <Aside />
          </Col>
          <Col>
            <NavBar />
            <h1 className="border-bottom border-secondary pb-3 mx-4">Novità</h1>
            <Novità />
            <SezioneEpisodi />
            <SezioneNuoveUscite />
            <Altro />
            <Footer />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
