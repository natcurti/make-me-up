import { Row } from "react-bootstrap";
import CardBenefits from "./CardBenefits";
import { Truck, Gift, CreditCard, PersonCircle } from "react-bootstrap-icons";

const ContainerCardsBenefits = () => {
  return (
    <Row className="w-100 mx-auto my-5 justify-content-center gap-3">
      <CardBenefits
        title="Frete Grátis"
        text="Oferecemos frete grátis para todas as compras acima de R$299 para
            todo o país. Aproveite."
        Icon={Truck}
      />
      <CardBenefits
        title="Brinde em todas as compras"
        text="Todos os nossos clientes recebem mimos especiais em compras de quaisquer valores."
        Icon={Gift}
      />

      <CardBenefits
        title="Pagamento seguro"
        text="Nosso site conta com ampla segurança e facilidade para seu pagamento."
        Icon={CreditCard}
      />

      <CardBenefits
        title="Atendimento de qualidade"
        text="Nossa equipe está pronta para tirar todas as suas dúvidas."
        Icon={PersonCircle}
      />
    </Row>
  );
};

export default ContainerCardsBenefits;
