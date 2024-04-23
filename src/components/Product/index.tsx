import { Button, Card } from "react-bootstrap";
import "./styles.css";
import ButtonIcon from "../ButtonIcon";
import { Heart, HeartFill, Cart2, Trash } from "react-bootstrap-icons";
import { IProduct } from "src/types/IProduct";
import { useDispatch } from "react-redux";
import { changeFavorite } from "src/store/reducers/items";
import { addProductToCart } from "src/store/reducers/cart";
import { openOrClose } from "src/store/reducers/offcanvasCart";

const Product = ({
  title,
  description,
  brand,
  price,
  image,
  id,
  favorite,
  isOnCart = false,
}: IProduct) => {
  const dispatch = useDispatch();

  const handleFavorite = (id: number) => {
    dispatch(changeFavorite(id));
  };

  const addToCart = (id: number) => {
    dispatch(addProductToCart(id));
    dispatch(openOrClose());
  };

  return (
    <Card className={`${isOnCart ? "container-card-cart" : "container-card"}`}>
      <div className="mx-auto mt-3">
        <img src={image} />
      </div>
      <Card.Body
        className={`${
          isOnCart && "px-0"
        } ${"d-flex flex-column justify-content-between"}`}
      >
        <div>
          <Card.Title className="card-title fw-bold">
            {brand.toUpperCase()}
          </Card.Title>
          <Card.Subtitle className="card-subtitle mb-3">{title}</Card.Subtitle>
          {!isOnCart && (
            <Card.Text className="card-text">{description}</Card.Text>
          )}
          <Card.Text className="fw-bold mb-4 fs-5">
            R${price.toFixed(2)}
          </Card.Text>
        </div>
        <div className="d-flex justify-content-between">
          <Button
            className="d-flex align-items-center gap-2 border-0 btn-buy"
            onClick={() => addToCart(id)}
          >
            Comprar
            <Cart2 size={18} />
          </Button>
          <ButtonIcon onClick={() => handleFavorite(id)}>
            {favorite ? <HeartFill size={25} /> : <Heart size={25} />}
          </ButtonIcon>
          {isOnCart && (
            <ButtonIcon isIconOnCart>
              <Trash size={25} />
            </ButtonIcon>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Product;
