import Product from "../Product";
import "./styles.css";

const ContainerProducts = () => {
  return (
    <div className="container-products d-flex justify-content-between mx-auto mt-5">
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
};

export default ContainerProducts;
