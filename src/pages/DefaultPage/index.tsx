import { Outlet } from "react-router-dom";
import Header from "src/components/Header";

const DefaultPage = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default DefaultPage;
