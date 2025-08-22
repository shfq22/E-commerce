import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Ourstore from './pages/Ourstore';
import Blogs from './pages/blogs';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Forgetpassword from './pages/Forgetpassword';
import Resetpassword from './pages/Resetpassword';

function App() {
  return (
    <>  
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route  path="about" element={<About />} />
      <Route  path="contact" element={<Contact/>} />
      <Route  path="store" element={<Ourstore/>} />
      <Route  path="blogs" element={<Blogs/>} />
      <Route  path="compare-product" element={<CompareProduct/>} />
      <Route  path="wishlist" element={<Wishlist/>}  />
      <Route  path="login" element={<Login/>}  />
      {/* <Route  path="signup" element={<Signup/>}  /> */}
      <Route  path="forgotpassword" element={<Forgetpassword/>}  />
      <Route  path="signup" element={<Signup/>}  />
      <Route  path="reset-password" element={<Resetpassword/>} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
);
}

export default App;
