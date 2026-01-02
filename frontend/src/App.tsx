import React from 'react';

import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import LoginPage from './pages/Login/LoginPage';
import RegisterPage from './pages/register/RegisterPage';
import LayoutPage from './pages/layout/LayoutPage';
import ProductPage from './pages/product/ProductPage';
import CartPage from './pages/cart/CartPage';
import ContactUsPage from './pages/contact/ContactUsPage';
import ViewAproduct from './pages/product/ViewAproduct';
import PlaceOrderPage from './pages/order/PlaceOrderPage';
import ImagePage from './pages/images/ImagePage';
import HomePage from './pages/home/HomePage';
import AboutUs from './pages/about/AboutUs';

function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/layout' element={<LayoutPage />} />
          <Route path='/homepage' element={<HomePage />} />
          <Route path='/aboutUs' element={<AboutUs />} />
          <Route path='/products' element={<ProductPage />} />
          <Route path='/product/:id' element={<ViewAproduct />} />
          <Route path='/carts' element={<CartPage />} />
          <Route path='/contactus' element={<ContactUsPage />} />
          <Route path='/placeOrder' element={<PlaceOrderPage />} />
          <Route path='/images' element={<ImagePage />} />
      </Routes>
    </Router>
  );
}

export default App;
