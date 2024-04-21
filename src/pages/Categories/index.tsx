import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BannerCategory from "src/components/BannerCategory";
import ContainerProducts from "src/components/ContainerProducts";
import Product from "src/components/Product";
import { IRootState } from "src/store";

const Categories = () => {
  const { categoryName } = useParams();

  const { itemsToShow, allCategories } = useSelector((state: IRootState) => ({
    itemsToShow: state.items.filter((item) => item.category === categoryName),
    allCategories: [
      ...state.categories.face,
      ...state.categories.eyes,
      ...state.categories.mouth,
    ],
  }));

  const category = allCategories.filter((item) => item.id === categoryName);
  const { name, description } = category[0];

  return (
    <div className="container-xxl mt-3">
      <BannerCategory title={name} />
      <div>{description}</div>
      <ContainerProducts>
        {itemsToShow.map((item) => (
          <Product key={item.id} {...item} />
        ))}
      </ContainerProducts>
    </div>
  );
};

export default Categories;
