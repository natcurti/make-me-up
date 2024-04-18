import { Col, Row } from "react-bootstrap";
import "./styles.css";

const Footer = () => {
  return (
    <footer className="footer py-5">
      <Row className="justify-content-center mx-auto" style={{ width: "85%" }}>
        <Col sm={6} md={3}>
          <p className="fs-3">Nossos Produtos</p>
          <ul className="footer-list footer-list-products">
            <li>Base</li>
            <li>Bronzer</li>
            <li>Blush</li>
            <li>Sombra</li>
            <li>Máscara</li>
            <li>Lápis</li>
            <li>Sobrancelha</li>
            <li>Batom</li>
            <li>Lápis de Boca</li>
          </ul>
        </Col>
        <Col sm={6} md={3}>
          <p className="fs-3">Minha Conta</p>
          <ul className="footer-list">
            <li>Dados Pessoais</li>
            <li>Meus Endereços</li>
            <li>Alterar Senha</li>
            <li>Meus Pedidos</li>
          </ul>
        </Col>
        <Col sm={6} md={3}>
          <p className="fs-3">Loucas por Beleza</p>
          <ul className="footer-list">
            <li>Guias</li>
            <li>Tutoriais</li>
            <li>Celebridades</li>
            <li>Vídeos</li>
          </ul>
        </Col>
        <Col sm={6} md={3}>
          <p className="fs-3">Estamos nas redes:</p>
          <ul className="footer-list">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
          <p className="fs-3">Entre em contato</p>
          <ul className="footer-list">
            <li>Email</li>
            <li>Telefone</li>
          </ul>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
