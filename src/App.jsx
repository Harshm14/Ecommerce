import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import LoginSignup from './pages/LoginSignup'
import Cart from './pages/Cart'
import Footer from './components/Footer/Footer';
import men_banner from './components/assets1/banner_mens.png'
import women_banner from './components/assets1/banner_women.png'
import kid_banner from './components/assets1/banner_kids.png'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid" />} />
          <Route path="/product/:productId" element={<Product />} /> 
           <Route path="/cart" element={<Cart />} />
           <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App
