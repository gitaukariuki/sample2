import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { ShopContext } from './Context/ShopContext';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import About from './Pages/About';
import Contact from './Pages/Contact';
import NotFound from './Pages/NotFound';
import Collections from './Pages/Collections';
import Offers from './Pages/Offers';

import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kids_banner from './Components/Assets/banner_kids.png';
import './App.css';

const App = () => {
  const { theme } = useContext(ShopContext);

  return (
    <div className={`${theme}_app`}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/women" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kids" />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/collections" element={<Collections />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <ScrollToTop smooth component={<p style={{ color: 'blue' }}>↑</p>} />
    </div>
  );
};

export default App;
