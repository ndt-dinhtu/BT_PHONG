import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QKitchenHome from "./component/QKitchenHome.jsx";
import About from "./component/About.jsx";
import Contact from "./component/Contact.jsx";
import Navbar from "./component/Navbar.jsx";
import Footer from "./component/Footer.jsx";
import ProductList from "./component/ProductList.jsx";
import ProductDetail from "./component/ProductDetail.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import NotFound from "./component/NotFound.jsx";
function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<QKitchenHome />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
       
      </Router>
    </>
  );
}

export default App;
