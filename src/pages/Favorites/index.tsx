import ContainerProducts from "src/components/ContainerProducts";
import Product from "src/components/Product";
import { useAppSelector } from "src/types/hooks";

const Favorites = () => {
  const favoriteProducts = useAppSelector((state) =>
    state.items.filter((item) => item.favorite === true)
  );

  return (
    <div className="container-xxl mt-5 mx-auto d-flex flex-column align-items-center">
      <h3>Meus Favoritos</h3>
      <main className="w-100">
        <ContainerProducts>
          {favoriteProducts.length > 0 ? (
            favoriteProducts.map((item) => <Product key={item.id} {...item} />)
          ) : (
            <p className="text-center">
              Você ainda não possui nenhum favorito.
            </p>
          )}
        </ContainerProducts>
      </main>
    </div>
  );
};

export default Favorites;
