import { Dropdown } from "react-bootstrap";
import { Heart } from "react-bootstrap-icons";
import ButtonIcon from "src/components/ButtonIcon";
import CartOffCanvas from "src/components/CartOffCanvas";
import LinkDropDown from "../LinkDropDown";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import ButtonApp from "src/components/Button";
import { useAppDispatch, useAppSelector } from "src/types/hooks";
import { signOut } from "firebase/auth";
import auth from "src/firebaseConfig";
import { setIsLoggedIn } from "src/store/reducers/isLoggedIn";

const Account = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => dispatch(setIsLoggedIn()))
      .catch((error) => console.log(error));
  };

  return (
    <div className="d-flex align-items-center">
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic" className="btn-login">
          <div className="d-flex flex-column align-items-start">
            {isLoggedIn ? (
              <p className="m-0">
                Olá! Seja <br /> bem vindo(a)!
              </p>
            ) : (
              <p className="m-0">
                Olá! Acesse <br /> sua conta
              </p>
            )}
          </div>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <div className="d-flex flex-column shadow-sm rounded-1 container-dropdown-account">
            <Dropdown.Item
              as={"span"}
              className={`d-flex justify-content-center 
              ${isLoggedIn && "order-last"}`}
            >
              {isLoggedIn ? (
                <ButtonApp onClick={handleSignOut} btnLogin>
                  Sair
                </ButtonApp>
              ) : (
                <ButtonApp onClick={() => navigate("/login")} btnLogin>
                  Entrar
                </ButtonApp>
              )}
            </Dropdown.Item>

            {!isLoggedIn && (
              <div className="d-flex flex-column container-new-account">
                Não tem conta?
                <Dropdown.Item as={"span"}>
                  <LinkDropDown to="/cadastro" type="new-account">
                    Crie uma aqui
                  </LinkDropDown>
                </Dropdown.Item>
              </div>
            )}

            <Dropdown.Item as={"span"}>
              <LinkDropDown
                to="/favoritos"
                type="account"
                isLoggedIn={isLoggedIn}
              >
                Meus Pedidos
              </LinkDropDown>
            </Dropdown.Item>
            <Dropdown.Item as={"span"}>
              <LinkDropDown to="/favoritos" type="account">
                Meus Dados
              </LinkDropDown>
            </Dropdown.Item>
            <Dropdown.Item as={"span"}>
              <LinkDropDown
                to="/favoritos"
                type="account"
                isLoggedIn={isLoggedIn}
              >
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
