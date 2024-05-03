import { useEffect } from "react";
import CarouselHome from "src/components/Carousel";
import ContainerCardsBenefits from "src/components/ContainerCardsBenefits";
import ContainerProducts from "src/components/ContainerProducts";
import Product from "src/components/Product";
import { getCategories } from "src/store/reducers/categories";
import { getItems } from "src/store/reducers/items";
import { useAppDispatch, useAppSelector } from "src/types/hooks";

const Home = () => {
  const itemsOnStore = useAppSelector((state) => state.items);
  const itemsToShow = itemsOnStore.slice(0, 12);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getItems());
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className="container-xxl mt-3">
      <CarouselHome />
      <main>
        <ContainerCardsBenefits />
        <ContainerProducts>
          {itemsToShow.map((item) => (
            <Product key={item.id} {...item} />
          ))}
        </ContainerProducts>
      </main>
    </div>
  );
};

export default Home;
