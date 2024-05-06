import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "src/components/Footer";
import Header from "src/components/Header";
import { getCategories } from "src/store/reducers/categories";
import { getItems } from "src/store/reducers/items";
import { useAppDispatch } from "src/types/hooks";

const DefaultPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getItems());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default DefaultPage;
