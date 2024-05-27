import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "src/components/Footer";
import Header from "src/components/Header";
import { getCategories } from "src/store/reducers/categories";
import { setIsLoggedIn } from "src/store/reducers/isLoggedIn";
import { getItems } from "src/store/reducers/items";
import { useAppDispatch, useAppSelector } from "src/types/hooks";

const DefaultPage = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getItems());

    if (user && Object.keys(user).length > 0) {
      dispatch(setIsLoggedIn());
    }
  }, [dispatch, user]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default DefaultPage;
