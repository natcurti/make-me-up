import { useSelector } from "react-redux";
import CarouselHome from "src/components/Carousel";
import ContainerCardsBenefits from "src/components/ContainerCardsBenefits";
import ContainerProducts from "src/components/ContainerProducts";
import Product from "src/components/Product";
import { IRootState } from "src/store";

const Home = () => {
  const itemsOnStore = useSelector((state: IRootState) => state.items);
  const itemsToShow = itemsOnStore.slice(0, 12);

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
