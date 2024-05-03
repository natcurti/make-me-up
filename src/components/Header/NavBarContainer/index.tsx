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
import LinkDropDown from "../LinkDropDown";
import { useAppSelector } from "src/types/hooks";

const NavBarContainer = () => {
  const { face, eyes, mouth } = useAppSelector((state) => state.categories);

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
              <Nav.Link as={"span"}>
                <Link to="/" className="link-home focus-ring">
                  Home
                </Link>
              </Nav.Link>

              <NavDropdown title="Rosto">
                <div className="d-flex flex-column shadow-sm rounded-1 container-dropdown-links">
                  {face.map((item) => (
                    <NavDropdown.Item as={"span"} key={item.id}>
                      <LinkDropDown
                        key={item.id}
                        to={`/categorias/${item.id}`}
                        type="dropdown"
                      >
                        {item.name}
                      </LinkDropDown>
                    </NavDropdown.Item>
                  ))}
                </div>
              </NavDropdown>
              <NavDropdown title="Olhos">
                <div className="d-flex flex-column shadow-sm rounded-1 container-dropdown-links">
                  {eyes.map((item) => (
                    <NavDropdown.Item as={"span"} key={item.id}>
                      <LinkDropDown
                        key={item.id}
                        to={`/categorias/${item.id}`}
                        type="dropdown"
                      >
                        {item.name}
                      </LinkDropDown>
                    </NavDropdown.Item>
                  ))}
                </div>
              </NavDropdown>
              <NavDropdown title="Boca">
                <div className="d-flex flex-column shadow-sm rounded-1 container-dropdown-links">
                  {mouth.map((item) => (
                    <NavDropdown.Item as={"span"} key={item.id}>
                      <LinkDropDown
                        key={item.id}
                        to={`/categorias/${item.id}`}
                        type="dropdown"
                      >
                        {item.name}
                      </LinkDropDown>
                    </NavDropdown.Item>
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
