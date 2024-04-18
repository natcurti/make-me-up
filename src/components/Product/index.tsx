import { Button, Card } from "react-bootstrap";
import "./styles.css";
import ButtonIcon from "../ButtonIcon";
import { Heart, Cart2 } from "react-bootstrap-icons";
import { IProduct } from "src/types/IProduct";

const Product = ({ title, description, brand, price, image }: IProduct) => {
  return (
    <Card className="container-card">
      <div className="mx-auto mt-3">
        <img src={image} />
      </div>
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title className="card-title fw-bold">
            {brand.toUpperCase()}
          </Card.Title>
          <Card.Subtitle className="card-subtitle mb-3">{title}</Card.Subtitle>
          <Card.Text className="card-text">{description}</Card.Text>
          <Card.Text className="fw-bold mb-4 fs-5">
            R${price.toFixed(2)}
          </Card.Text>
        </div>
        <div className="d-flex justify-content-between">
          <Button className="d-flex align-items-center gap-2 border-0 btn-buy">
            Comprar
            <Cart2 size={18} />
          </Button>
          <ButtonIcon>
            <Heart size={25} />
          </ButtonIcon>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Product;