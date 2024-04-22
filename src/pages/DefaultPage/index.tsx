import { Outlet } from "react-router-dom";
import Footer from "src/components/Footer";
import Header from "src/components/Header";

const DefaultPage = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default DefaultPage;
