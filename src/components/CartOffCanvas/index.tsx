import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import ButtonIcon from "../ButtonIcon";
import { Cart2 } from "react-bootstrap-icons";

const CartOffCanvas = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(!isOpen);
  return (
    <>
      <ButtonIcon onClick={handleOpen}>
        <Cart2 size={25} />
      </ButtonIcon>

      <Offcanvas show={isOpen} onHide={handleOpen} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CartOffCanvas;
