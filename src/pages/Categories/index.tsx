import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ContainerProducts from "src/components/ContainerProducts";
import Product from "src/components/Product";
import { IRootState } from "src/store";

const Categories = () => {
  const { categoryName } = useParams();
  const itemsToShow = useSelector((state: IRootState) =>
    state.items.filter((item) => item.category === categoryName)
  );
  return (
    <>
      <h3>CATEGORIA</h3>
      <ContainerProducts>
        {itemsToShow.map((item) => (
          <Product key={item.id} {...item} />
        ))}
      </ContainerProducts>
    </>
  );
};

export default Categories;
