import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

// import NavBar from "./layouts/NavBar";
import Carousel from "./components/Carousel";
import NavBar from "./layouts/NavBar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./pages/Error";
import SharedLayout from "./layouts/SahredLayout";
import LoginAdmin from "./pages/LoginAdmin";
import axios from "axios";
import { data } from "autoprefixer";
import MobileProducts from "./pages/MobileProducts";
import LopTopProducts from "./pages/LopTopProducts";
import AdminProducts from "./pages/AdminProducts";

import ProductDetails from "./components/post/SingleProduct";
import ShoppingCart from "./pages/ShoppingCart";
import PaymentForm from "./pages/PaymentForm";
function App() {
  const [loginState, setLogin] = useState(true);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/LoginAdmin" element={<LoginAdmin />} />
          <Route path="/Products" element={<MobileProducts />} />
          <Route index element={<Home />} />
          <Route path="/LopTops" element={<LopTopProducts />} />
          {/* <PrivateRoute path="/AdminProducts" element={<AdminProducts />} /> */}
          <Route path="/AdminProducts" element={<AdminProducts />} />
          <Route path="/ShoppingCart" element={<ShoppingCart />} />
          <Route path="/Payment" element={<PaymentForm />} />
          <Route>
            <Route path="/:ProductId" element={<ProductDetails />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
