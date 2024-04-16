import {
  Button,
  Container,
  Dropdown,
  Form,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import "./styles.css";
import { Link } from "react-router-dom";
import { Heart, Cart2, Search } from "react-bootstrap-icons";
import Message from "../Message";

const iconProps = {
  size: 25,
  color: "#ff4f9d",
};

const Header = () => {
  return (
    <header className="header shadow-sm">
      <Message />
      <Navbar expand="lg">
        <Container fluid className="d-flex px-3">
          <Link to="/" className="img-container me-xl-5">
            <img src="/public/logo.png" className="img-fluid" />
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-around">
            <Nav navbarScroll className=" text-nav gap-xl-3 p-3">
              <Link to="/" className="link">
                Home
              </Link>
              <NavDropdown title="Rosto" id="navbarScrollingDropdown">
                <div className="d-flex flex-column shadow-sm rounded-1">
                  <Link to="" className="link-dropdown">
                    Base
                  </Link>
                  <Link to="" className="link-dropdown">
                    Bronzer
                  </Link>
                  <Link to="" className="link-dropdown">
                    Blush
                  </Link>
                </div>
              </NavDropdown>
              <NavDropdown title="Olhos" id="navbarScrollingDropdown">
                <div className="d-flex flex-column shadow-sm rounded-1">
                  <Link to="" className="link-dropdown">
                    Sombra
                  </Link>
                  <Link to="" className="link-dropdown">
                    Máscara
                  </Link>
                  <Link to="" className="link-dropdown">
                    Lápis
                  </Link>
                  <Link to="" className="link-dropdown">
                    Sobrancelha
                  </Link>
                </div>
              </NavDropdown>
              <NavDropdown title="Boca" id="navbarScrollingDropdown">
                <div className="d-flex flex-column shadow-sm rounded-1">
                  <Link to="" className="link-dropdown">
                    Batom
                  </Link>
                  <Link to="" className="link-dropdown">
                    Lápis de Boca
                  </Link>
                </div>
              </NavDropdown>
            </Nav>
            <Form className="d-flex p-3">
              <Form.Control
                type="search"
                placeholder="Buscar..."
                className="me-2"
                aria-label="Buscar"
              />
              <Button className="btn-search">
                <Search size={20} color="#fff" />
              </Button>
            </Form>
            <div className="d-flex align-items-center gap-3 p-3">
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" className="btn-login">
                  <div className="d-flex flex-column align-items-start">
                    <p className="m-0">Olá! Acesse</p>
                    <p className="m-0">sua conta</p>
                  </div>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <div className="d-flex flex-column shadow-sm rounded-1">
                    <Button className="btn-account mx-auto my-2">Entrar</Button>
                    <Link to="" className="link-account">
                      Meus Pedidos
                    </Link>
                    <Link to="" className="link-account">
                      Meus Dados
                    </Link>
                    <Link to="" className="link-account">
                      Meus Favoritos
                    </Link>
                  </div>
                </Dropdown.Menu>
              </Dropdown>

              <Heart {...iconProps} />
              <Cart2 {...iconProps} />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
