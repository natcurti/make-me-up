import { Link } from "react-router-dom";

const Orders = () => {
  return (
    <div className="container-xxl mt-5 mx-auto d-flex flex-column align-items-center">
      <h3>Meus Pedidos</h3>
      <main className="w-100 text-center fs-5">
        <p className="mb-0">Você ainda não possui nenhum pedido.</p>
        <Link to="/" style={{ textDecoration: "none" }}>
          Retorne para a página inicial
        </Link>
      </main>
    </div>
  );
};

export default Orders;
