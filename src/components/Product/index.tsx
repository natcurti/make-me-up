import { Button, Card } from "react-bootstrap";
import "./styles.css";
import ButtonIcon from "../ButtonIcon";
import {
  Heart,
  HeartFill,
  Cart2,
  Trash,
  PlusCircle,
  DashCircle,
} from "react-bootstrap-icons";
import { IProduct } from "src/types/IProduct";
import { changeFavorite } from "src/store/reducers/items";
import {
  addProductToCart,
  deleteItem,
  updateQuantity,
} from "src/store/reducers/cart";
import { openOrClose } from "src/store/reducers/offcanvasCart";
import { useAppDispatch } from "src/types/hooks";

const Product = ({
  title,
  description,
  brand,
  price,
  image,
  id,
  favorite,
  isOnCart = false,
  quantity,
}: IProduct) => {
  const dispatch = useAppDispatch();

  const handleFavorite = (id: number) => {
    dispatch(changeFavorite(id));
  };

  const addToCart = (id: number) => {
    dispatch(addProductToCart(id));
    dispatch(openOrClose());
  };

  return (
    <Card
      className={`${isOnCart ? "container-card-cart mb-3" : "container-card"}`}
    >
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
          {isOnCart ? (
            <div className="d-flex align-items-center gap-3">
              <ButtonIcon
                isIconOnCart
                onClick={() => {
                  if (quantity) {
                    if (quantity > 1)
                      dispatch(updateQuantity({ id: id, quantity: -1 }));
                    if (quantity === 1) dispatch(deleteItem(id));
                  }
                }}
              >
                <DashCircle size={25} />
              </ButtonIcon>
              <p className="mb-0 fw-bold fs-5">
                {String(0 || quantity).padStart(2, "0")}
              </p>
              <ButtonIcon
                isIconOnCart
                onClick={() =>
                  dispatch(updateQuantity({ id: id, quantity: 1 }))
                }
              >
                <PlusCircle size={25} />
              </ButtonIcon>
            </div>
          ) : (
            <Button
              className="d-flex align-items-center gap-2 border-0 btn-buy"
              onClick={() => addToCart(id)}
            >
              Comprar
              <Cart2 size={18} />
            </Button>
          )}
          <ButtonIcon onClick={() => handleFavorite(id)}>
            {favorite ? <HeartFill size={25} /> : <Heart size={25} />}
          </ButtonIcon>
          {isOnCart && (
            <ButtonIcon isIconOnCart onClick={() => dispatch(deleteItem(id))}>
              <Trash size={25} />
            </ButtonIcon>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Product;
