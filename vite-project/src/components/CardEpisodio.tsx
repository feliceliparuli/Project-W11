import { Card } from "react-bootstrap";

type Props = {
  image: string;
  title: string;
};

const CardEpisodio = ({ image, title }: Props) => {
  return (
    <Card className="bg-dark border-0 text-white rounded-3 overflow-hidden h-100">
      <Card.Img
        src={image}
        alt={title}
        style={{ objectFit: "cover", aspectRatio: "1 / 1" }}
      />
      <Card.Body className="p-2">
        <Card.Title className="fs-6 mb-0">{title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default CardEpisodio;
