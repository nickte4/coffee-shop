import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import products from "./data/products";

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-background">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            {/* add routes for each product based on id */}
            <Route path="/products/:id" element={<Product />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
