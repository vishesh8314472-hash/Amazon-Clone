import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<HomePage cartCount={cartCount} />} />
      <Route
        path="/product"
        element={
          <ProductPage cartCount={cartCount} setCartCount={setCartCount} />
        }
      />
      <Route path="*" element={<NotFoundPage cartCount={cartCount} />} />
    </Routes>
  );
}

export default App;
