import { Button, Dropdown } from "react-bootstrap";
import { Heart } from "react-bootstrap-icons";
import ButtonIcon from "src/components/ButtonIcon";
import CartOffCanvas from "src/components/CartOffCanvas";
import LinkDropDown from "../LinkDropDown";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();

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
          <div className="d-flex flex-column shadow-sm rounded-1 container-dropdown-account">
            <Dropdown.Item
              as={"span"}
              className="d-flex justify-content-center"
            >
              <Button
                className="btn-sign-in mx-auto my-2"
                onClick={() => navigate("/login")}
              >
                Entrar
              </Button>
            </Dropdown.Item>
            <div className="d-flex flex-column container-new-account">
              Não tem conta?
              <Dropdown.Item as={"span"}>
                <LinkDropDown to="/favoritos" type="new-account">
                  Crie uma aqui
                </LinkDropDown>
              </Dropdown.Item>
            </div>
            <Dropdown.Item as={"span"}>
              <LinkDropDown to="/favoritos" type="account">
                Meus Pedidos
              </LinkDropDown>
            </Dropdown.Item>
            <Dropdown.Item as={"span"}>
              <LinkDropDown to="/favoritos" type="account">
                Meus Dados
              </LinkDropDown>
            </Dropdown.Item>
            <Dropdown.Item as={"span"}>
              <LinkDropDown to="/favoritos" type="account">
                Meus Favoritos
              </LinkDropDown>
            </Dropdown.Item>
          </div>
        </Dropdown.Menu>
      </Dropdown>
      <ButtonIcon onClick={() => navigate("/favoritos")}>
        <Heart size={25} />
      </ButtonIcon>
      <CartOffCanvas />
    </div>
  );
};

export default Account;
