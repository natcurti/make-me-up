import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DefaultPage from "./pages/DefaultPage";
import Categories from "./pages/Categories";
import Favorites from "./pages/Favorites";
import ScrollToTop from "./components/ScrollToTop";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Register from "./pages/Register";
import Orders from "./pages/Orders";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase/firebase-config";
import ClientData from "./pages/ClientData";

function App() {
  const [user] = useAuthState(auth);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Home />} />
          <Route path="categorias/:categoryName" element={<Categories />} />
          <Route path="favoritos" element={<Favorites />} />
          <Route path="busca" element={<Search />} />
          <Route
            path="meus-pedidos"
            element={user ? <Orders /> : <Navigate to="/login" />}
          />
          <Route
            path="meus-dados"
            element={user ? <ClientData /> : <Navigate to="/login" />}
          />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
