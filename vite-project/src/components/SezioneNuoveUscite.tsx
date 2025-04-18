import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardNuoveUscite from "./CardNuoveUscite.tsx";

type Song = {
  id: number;
  title: string;
  artist: { name: string };
  album: { cover_medium: string };
};

const SezioneNuoveUscite = () => {
  const [brani, setBrani] = useState<Song[]>([]);
  useEffect(() => {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=avicii")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel caricamento dati");
        }
      })
      .then((data) => {
        console.log(data);
        setBrani(data.data.slice(0, 12));
      })
      .catch((err) => console.error("Errore fetch:", err));
  }, []);

  return (
    <Container fluid className="pt-5">
      <h4 className="text-white fw-bold  mb-3">Nuove uscite</h4>
      <Row className="pt-2 justify-content-between">
        {brani.map((song, index) => (
          <Col
            key={song.id}
            xs={4}
            sm={4}
            md={3}
            lg={2}
            className={index >= 6 ? "d-none d-md-block" : ""}
          >
            <CardNuoveUscite
              title={song.title}
              artist={song.artist.name}
              image={song.album.cover_medium}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SezioneNuoveUscite;
