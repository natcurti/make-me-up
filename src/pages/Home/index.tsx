import CarouselHome from "src/components/Carousel";
import ContainerCardsBenefits from "src/components/ContainerCardsBenefits";
import ContainerProducts from "src/components/ContainerProducts";
import Product from "src/components/Product";
import { useAppSelector } from "src/types/hooks";
import Spinner from "react-bootstrap/Spinner";
import { IProduct } from "src/types/IProduct";

const Home = () => {
  const { itemsOnStore, filteredItems } = useAppSelector((state) => {
    if (state.search !== "") {
      return {
        filteredItems: state.items.filter((item) =>
          item.title.toLowerCase().includes(state.search.toLowerCase())
        ),
        itemsOnStore: state.items,
      };
    }
    return {
      itemsOnStore: state.items,
      filteredItems: [],
    };
  });

  let itemsToShow: IProduct[] = [];

  if (filteredItems.length > 0) {
    itemsToShow = filteredItems;
  } else {
    itemsToShow = itemsOnStore.slice(0, 12);
  }

  return (
    <div className="container-xxl mt-3">
      <CarouselHome />
      <main>
        <ContainerCardsBenefits />
        <div className="text-center">
          {itemsToShow.length === 0 && <Spinner animation="border" />}
        </div>
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
