import {
  Button,
  Container,
  Nav,
  NavDropdown,
  Navbar,
  Form,
} from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "./styles.css";
import { useSelector } from "react-redux";
import { IRootState } from "src/store";
import LinkDropDown from "../LinkDropDown";

const NavBarContainer = () => {
  const { face, eyes, mouth } = useSelector(
    (state: IRootState) => state.categories
  );

  return (
    <Navbar expand="lg" style={{ width: "80%" }}>
      <Container fluid className="d-flex justify-content-between">
        <Link to="/" className="img-container me-xl-2 focus-ring">
          <h1 className="m-0">
            <img
              src="/assets/logo.png"
              className="img-fluid"
              alt="Logo escrito make me up, em tons de rosa e roxo."
            />
          </h1>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-around">
          <div className="d-flex flex-column flex-xl-row justify-content-xl-around gap-2 container-nav-and-input">
            <Nav navbarScroll className="text-nav gap-xl-3">
              <Link to="/" className="link-home focus-ring">
                Home
              </Link>
              <NavDropdown title="Rosto" id="navbarScrollingDropdown">
                <div className="d-flex flex-column shadow-sm rounded-1">
                  {face.map((item) => (
                    <LinkDropDown
                      key={item.id}
                      to={`/categorias/${item.id}`}
                      type="dropdown"
                    >
                      {item.name}
                    </LinkDropDown>
                  ))}
                </div>
              </NavDropdown>
              <NavDropdown title="Olhos" id="navbarScrollingDropdown">
                <div className="d-flex flex-column shadow-sm rounded-1">
                  {eyes.map((item) => (
                    <LinkDropDown
                      key={item.id}
                      to={`/categorias/${item.id}`}
                      type="dropdown"
                    >
                      {item.name}
                    </LinkDropDown>
                  ))}
                </div>
              </NavDropdown>
              <NavDropdown title="Boca" id="navbarScrollingDropdown">
                <div className="d-flex flex-column shadow-sm rounded-1">
                  {mouth.map((item) => (
                    <LinkDropDown
                      key={item.id}
                      to={`/categorias/${item.id}`}
                      type="dropdown"
                    >
                      {item.name}
                    </LinkDropDown>
                  ))}
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarContainer;
