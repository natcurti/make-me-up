import { Button, Card } from "react-bootstrap";
import "./styles.css";
import ButtonIcon from "../ButtonIcon";
import { Heart, Cart2 } from "react-bootstrap-icons";
import { IProduct } from "src/types/IProduct";

const Product = ({
  title,
  description,
  brand,
  price,
  category,
  image,
  id,
}: IProduct) => {
  console.log(title, description, brand, price, category, image, id);
  return (
    <Card className="container-card">
      <div className="mx-auto mt-3">
        <img src={image} />
      </div>
      <Card.Body>
        <Card.Title className="card-title">Card Title</Card.Title>
        <Card.Text className="card-subtitle mb-3">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
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
