import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Add this line
import './styles/style.css';

import Header from './components/Header';
import Footer from './components/Footer';
import CarouselSlider from './components/CarouselSlider';
import Shop from './components/Shop';
import Featured from './components/Featured';
import Categories from './components/Categories';
import Products from './components/Products';
import Offer from './components/Offer';
import ProductGrid from './components/ProductGrid';
import TopBar from './components/TopBar';
import Contact from './components/Contact';
import Detail from './components/Detail';  // Import missing components
import Cart from './components/Cart';      // Import missing components
import CheckOut from './components/CheckOut'; // Import missing components

function Home() {
  return (
    <>
      <CarouselSlider/>
      <Featured/>
      <Categories/>
      <Products/>
      <Offer/>
      <ProductGrid/>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <TopBar/>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
