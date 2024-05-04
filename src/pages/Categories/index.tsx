import { useEffect } from "react";
import { useParams } from "react-router-dom";
import BannerCategory from "src/components/BannerCategory";
import ContainerProducts from "src/components/ContainerProducts";
import Product from "src/components/Product";
import { getCategories } from "src/store/reducers/categories";
import { getItems } from "src/store/reducers/items";
import { useAppDispatch, useAppSelector } from "src/types/hooks";

const Categories = () => {
  const { categoryName } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getItems());
  }, [dispatch]);

  const { itemsToShow, allCategories } = useAppSelector((state) => ({
    itemsToShow: state.items.filter((item) => item.category === categoryName),
    allCategories: state.categories,
  }));

  const categoriesArray = [];
  categoriesArray.push(
    ...allCategories.face,
    ...allCategories.eyes,
    ...allCategories.mouth
  );

  const category = categoriesArray.filter((item) => item.id === categoryName);
  const { name, description } = category[0] || [];

  return (
    <div className="container-xxl mt-3 mx-auto">
      <BannerCategory title={name} />
      <h3 className="w-75 fs-5 mx-auto text-center my-3">{description}</h3>
      <ContainerProducts>
        {itemsToShow.map((item) => (
          <Product key={item.id} {...item} />
        ))}
      </ContainerProducts>
    </div>
  );
};

export default Categories;
