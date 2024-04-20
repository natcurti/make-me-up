import { Card } from "react-bootstrap";

import "./styles.css";
import { Icon } from "react-bootstrap-icons";

interface ICardBenefits {
  title: string;
  text: string;
  Icon: Icon;
}

const CardBenefits = ({ title, text, Icon }: ICardBenefits) => {
  return (
    <Card border="secondary-subtle" className="container-card-benefits g-0 p-0">
      <Card.Body className="d-flex justify-content-between align-items-center gap-3">
        {Icon && <Icon size={75} />}
        <div style={{ width: "85%" }}>
          <Card.Title className="text-uppercase fw-bold fs-4">
            {title}
          </Card.Title>
          <Card.Text className="text-benefits">{text}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardBenefits;
