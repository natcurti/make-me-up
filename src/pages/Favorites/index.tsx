import { useSelector } from "react-redux";
import ContainerProducts from "src/components/ContainerProducts";
import Product from "src/components/Product";
import { IRootState } from "src/store";

const Favorites = () => {
  const favoriteProducts = useSelector((state: IRootState) =>
    state.items.filter((item) => item.favorite === true)
  );

  return (
    <div className="container-xxl mt-5 mx-auto d-flex flex-column align-items-center">
      <h3>Meus Favoritos</h3>
      <main>
        <ContainerProducts>
          {favoriteProducts.map((item) => (
            <Product key={item.id} {...item} />
          ))}
        </ContainerProducts>
      </main>
    </div>
  );
};

export default Favorites;
