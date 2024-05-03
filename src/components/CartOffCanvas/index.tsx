import { Button, Offcanvas } from "react-bootstrap";
import ButtonIcon from "../ButtonIcon";
import { Cart2 } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "src/store";
import Product from "../Product";
import { openOrClose } from "src/store/reducers/offcanvasCart";
import { IProduct } from "src/types/IProduct";
import "./styles.css";

const CartOffCanvas = () => {
  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(openOrClose());
  };

  const { productsOnCart, isOpen, total } = useSelector((state: IRootState) => {
    let total = 0;
    const productsOnCart = state.cart.reduce<IProduct[]>(
      (items, itemOnCart) => {
        const product = state.items.find((item) => item.id === itemOnCart.id);
        if (product) {
          total += product.price * itemOnCart.quantity;
          items.push({
            ...product,
            quantity: itemOnCart.quantity,
          });
        }
        return items;
      },
      []
    );

    return {
      productsOnCart,
      isOpen: state.offcanvasCart,
      total,
    };
  });

  return (
    <>
      <ButtonIcon onClick={handleOpen}>
        <Cart2 size={25} />
      </ButtonIcon>

      <Offcanvas show={isOpen} onHide={handleOpen} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrinho de Compras</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column justify-content-between">
          {productsOnCart.map((product) => (
            <Product key={product.id} {...product} isOnCart />
          ))}
          <div className="d-flex flex-column">
            <p className="fw-bold fs-5">Total: {total.toFixed(2)} </p>
            <Button className="btn-end-purchase">Finalizar compra</Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CartOffCanvas;
