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

const Header = () => {
  return (
    <header className="header shadow-sm">
      <Message />
      <Navbar expand="lg">
        <Container fluid className="d-flex px-3">
          <Link to="/" className="img-container me-xl-2 focus-ring">
            <img src="/public/logo.png" className="img-fluid" />
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-around">
            <div className="d-flex flex-column flex-xl-row justify-content-xl-around gap-2 container-nav-and-input">
              <Nav navbarScroll className="text-nav gap-xl-3">
                <Link to="/" className="link focus-ring">
                  Home
                </Link>
                <NavDropdown title="Rosto" id="navbarScrollingDropdown">
                  <div className="d-flex flex-column shadow-sm rounded-1">
                    <Link to="" className="link-dropdown focus-ring">
                      Base
                    </Link>
                    <Link to="" className="link-dropdown focus-ring">
                      Bronzer
                    </Link>
                    <Link to="" className="link-dropdown focus-ring">
                      Blush
                    </Link>
                  </div>
                </NavDropdown>
                <NavDropdown title="Olhos" id="navbarScrollingDropdown">
                  <div className="d-flex flex-column shadow-sm rounded-1">
                    <Link to="" className="link-dropdown focus-ring">
                      Sombra
                    </Link>
                    <Link to="" className="link-dropdown focus-ring">
                      Máscara
                    </Link>
                    <Link to="" className="link-dropdown focus-ring">
                      Lápis
                    </Link>
                    <Link to="" className="link-dropdown focus-ring">
                      Sobrancelha
                    </Link>
                  </div>
                </NavDropdown>
                <NavDropdown title="Boca" id="navbarScrollingDropdown">
                  <div className="d-flex flex-column shadow-sm rounded-1">
                    <Link to="" className="link-dropdown focus-ring">
                      Batom
                    </Link>
                    <Link to="" className="link-dropdown focus-ring">
                      Lápis de Boca
                    </Link>
                  </div>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
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
            </div>
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
                      <Link to="" className="link-new-account focus-ring">
                        Crie uma aqui
                      </Link>
                    </div>
                    <Link to="" className="link-account focus-ring">
                      Meus Pedidos
                    </Link>
                    <Link to="" className="link-account focus-ring">
                      Meus Dados
                    </Link>
                    <Link to="" className="link-account focus-ring">
                      Meus Favoritos
                    </Link>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
              <Button className="bg-transparent border-0 btn-icon">
                <Heart size={25} />
              </Button>
              <Button className="bg-transparent border-0 btn-icon">
                <Cart2 size={25} />
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
