import { Col, Row } from "react-bootstrap";
import { HiChevronRight, HiOutlineMail } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import "./styles.css";
import { useSelector } from "react-redux";
import { IRootState } from "src/store";
import { Link } from "react-router-dom";

const Footer = () => {
  const { categories } = useSelector((state: IRootState) => {
    return {
      categories: [
        ...state.categories.face,
        ...state.categories.eyes,
        ...state.categories.mouth,
      ],
    };
  });

  console.log(categories);

  return (
    <div className="w-100 container-footer">
      <footer className="footer py-5 mx-auto">
        <Row
          className="justify-content-center mx-auto"
          style={{ width: "85%" }}
        >
          <Col sm={6} md={3}>
            <p className="fs-3 footer-title">Nossos Produtos</p>
            <ul className="footer-list footer-list-products">
              {categories.map((category) => (
                <span>
                  <li>
                    <Link
                      to={`/categorias/${category.id}`}
                      className="link-categories-footer d-flex align-items-center"
                    >
                      <HiChevronRight size="20" />
                      {category.name}
                    </Link>
                  </li>
                </span>
              ))}
            </ul>
          </Col>
          <Col sm={6} md={3}>
            <p className="fs-3 footer-title">Minha Conta</p>
            <ul className="footer-list">
              <li>Dados Pessoais</li>
              <li>Meus Endereços</li>
              <li>Alterar Senha</li>
              <li>Meus Pedidos</li>
            </ul>
          </Col>
          <Col sm={6} md={3}>
            <p className="fs-3 footer-title">Loucas por Beleza</p>
            <ul className="footer-list">
              <li>Guias</li>
              <li>Tutoriais</li>
              <li>Celebridades</li>
              <li>Vídeos</li>
            </ul>
          </Col>
          <Col sm={6} md={3}>
            <p className="fs-3 footer-title">Estamos nas redes:</p>
            <ul className="footer-list">
              <li>
                <Link
                  to="/"
                  className="link-categories-footer d-flex align-items-center"
                >
                  <HiChevronRight size="20" />
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="link-categories-footer d-flex align-items-center"
                >
                  <HiChevronRight size="20" />
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="link-categories-footer d-flex align-items-center"
                >
                  <HiChevronRight size="20" />
                  Instagram
                </Link>
              </li>
            </ul>
            <p className="fs-3 footer-title">Entre em contato</p>
            <ul className="footer-list container-contact">
              <li>
                <a href="" className="d-flex align-items-center gap-1">
                  <HiOutlineMail size="20" /> Email
                </a>
              </li>
              <li>
                <a href="" className="d-flex align-items-center gap-1">
                  <BsFillTelephoneFill size="20" />
                  Telefone
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </footer>
    </div>
  );
};

export default Footer;
