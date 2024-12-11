import { useState } from "react";
import "./App.css";
import NavBar from "../src/Components/NavBarComponents/NavBar";
import Home from "../src/Components/Pages/Home";
import ProductList from "../src/Components/Pages/ProductList";
import ProductFilterComponents from "../src/Components/Pages/Product-Filter-Component";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "../src/Components/Pages/ProductDetails";
function App() {
  const [category, setCategory] = useState("");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar setCategory={setCategory} />
                <Home />
                <ProductFilterComponents
                  setCategory={setCategory}
                  category={category}
                />
              </>
            }
          />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;