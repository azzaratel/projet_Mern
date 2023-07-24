import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Profil from "./components/Profil";
import Register from "./components/Register";
import { userCurrent } from "./JS/userSlice/userSlice";
import PrivateRoute from "./Routes/PrivateRouter";
import Login from "./components/Login";
import { getproduct } from "./JS/productSlice";
import { getcommande } from "./JS/commandeSlice";
import ProduitCosmo from "./components/ProduitCosmo";
import ProduitElectro from "./components/ProduitElectro";
import ProduitAli from "./components/ProduitAli";
import Store from "./components/Store";
import Home from "./components/Home";
import Navbarr from "./components/Navbarr";
import Contact from "./components/Contact";
import Panier from "./components/Panier";
import Dashbord from "./components/Dashbord";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  const [ping, setping] = useState(false);
  useEffect(() => {
    dispatch(userCurrent());
    dispatch(getproduct());
    dispatch(getcommande());
  }, [ping]);
  return (
    <div className="App">
      <Navbarr />
      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/pco"
          element={<ProduitCosmo ping={ping} setping={setping} />}
        />
        <Route
          path="/pe"
          element={<ProduitElectro ping={ping} setping={setping} />}
        />
        <Route
          path="/pa"
          element={<ProduitAli ping={ping} setping={setping} />}
        />
        <Route path="/store" element={<Store />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/dashbord"
          element={<Dashbord ping={ping} setping={setping} />}
        />
        <Route
          path="/panier"
          element={<Panier ping={ping} setping={setping} />}
        />
        <Route element={<PrivateRoute />}>
          <Route
            path="/profil"
            element={<Profil ping={ping} setping={setping} />}
          />
        </Route>{" "}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
