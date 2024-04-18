import { useSelector } from "react-redux";
import { IRootState } from "src/store";
import Product from "../Product";
import { Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ContainerProducts = () => {
  const { categoryName } = useParams();
  console.log(categoryName);
  const itemsOnStore = useSelector((state: IRootState) => state.items);
  let itemsToShow = itemsOnStore;
  if (categoryName === "") {
    itemsToShow = itemsOnStore.filter((item) => item.category === categoryName);
  }

  return (
    <Row
      className="justify-content-center mx-auto mt-5 gap-4"
      style={{ width: "80%" }}
    >
      {itemsToShow.map((item) => (
        <Product key={item.id} {...item} />
      ))}
    </Row>
  );
};

export default ContainerProducts;
