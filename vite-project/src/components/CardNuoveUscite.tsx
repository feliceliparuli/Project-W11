import { Card } from "react-bootstrap";

type Props = {
  image: string;
  title: string;
  artist: string;
};

const CardNuoveUscite = ({ image, title, artist }: Props) => {
  return (
    <Card className="bg-dark text-white border-0 rounded-3 h-100">
      <Card.Img
        src={image}
        alt={title}
        style={{ objectFit: "cover", aspectRatio: "1 / 1" }}
      />
      <Card.Body className="p-2">
        <Card.Title className="fs-6 mb-0">{title}</Card.Title>
        <Card.Text className="text-secondary fs-6">{artist}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardNuoveUscite;
