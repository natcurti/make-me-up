import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DefaultPage from "./pages/DefaultPage";
import Categories from "./pages/Categories";
import Favorites from "./pages/Favorites";
import ScrollToTop from "./components/ScrollToTop";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Home />} />
          <Route path="categorias/:categoryName" element={<Categories />} />
          <Route path="favoritos" element={<Favorites />} />
          <Route path="busca" element={<Search />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
