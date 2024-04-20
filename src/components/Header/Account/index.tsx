import { Button, Dropdown } from "react-bootstrap";
import { Heart } from "react-bootstrap-icons";
import ButtonIcon from "src/components/ButtonIcon";
import CartOffCanvas from "src/components/CartOffCanvas";
import LinkDropDown from "../LinkDropDown";
import "./styles.css";

const Account = () => {
  return (
    <div className="d-flex align-items-center">
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic" className="btn-login">
          <div className="d-flex flex-column align-items-start">
            <p className="m-0">Olá! Acesse</p>
            <p className="m-0">sua conta</p>
          </div>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <div className="d-flex flex-column shadow-sm rounded-1">
            <Button className="btn-sign-in mx-auto my-2">Entrar</Button>
            <div className="d-flex flex-column container-new-account">
              Não tem conta?
              <LinkDropDown to="" type="new-account">
                Crie uma aqui
              </LinkDropDown>
            </div>
            <LinkDropDown to="" type="account">
              Meus Pedidos
            </LinkDropDown>
            <LinkDropDown to="" type="account">
              Meus Dados
            </LinkDropDown>
            <LinkDropDown to="/favoritos" type="account">
              Meus Favoritos
            </LinkDropDown>
          </div>
        </Dropdown.Menu>
      </Dropdown>
      <ButtonIcon>
        <Heart size={25} />
      </ButtonIcon>
      <CartOffCanvas />
    </div>
  );
};

export default Account;
