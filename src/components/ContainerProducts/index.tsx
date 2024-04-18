import { useSelector } from "react-redux";
import "./styles.css";
import { IRootState } from "src/store";
import Product from "../Product";

const ContainerProducts = () => {
  const itemsOnStore = useSelector((state: IRootState) => state.items);

  return (
    <div className="container-products d-flex justify-content-between mx-auto mt-5">
      {itemsOnStore.map((item) => (
        <Product key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ContainerProducts;
