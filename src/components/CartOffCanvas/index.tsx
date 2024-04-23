import { Offcanvas } from "react-bootstrap";
import ButtonIcon from "../ButtonIcon";
import { Cart2 } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "src/store";
import Product from "../Product";
import { openOrClose } from "src/store/reducers/offcanvasCart";

const CartOffCanvas = () => {
  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(openOrClose());
  };

  const { productsOnCart, isOpen } = useSelector((state: IRootState) => {
    const idItemsOnCart = state.cart.map((item) => item.id);
    return {
      productsOnCart: state.items.filter((product) =>
        idItemsOnCart.some((item) => item === product.id)
      ),
      isOpen: state.offcanvasCart,
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
        <Offcanvas.Body>
          {productsOnCart.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CartOffCanvas;
