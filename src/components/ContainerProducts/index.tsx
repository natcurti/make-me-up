import { useSelector } from "react-redux";
import { IRootState } from "src/store";
import Product from "../Product";
import { Row } from "react-bootstrap";

const ContainerProducts = () => {
  const itemsOnStore = useSelector((state: IRootState) => state.items);

  return (
    <Row
      className="justify-content-center mx-auto mt-5 gap-4"
      style={{ width: "80%" }}
    >
      {itemsOnStore.map((item) => (
        <Product key={item.id} {...item} />
      ))}
    </Row>
  );
};

export default ContainerProducts;
