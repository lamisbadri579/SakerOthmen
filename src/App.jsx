import Login from "./pages/login/Login.jsx";
import Contact from "./pages/contact/Contact.jsx";
import { Route, Routes } from 'react-router-dom';  
import Navbar from './components/navbar/Navbar.jsx';
import Footer from "./components/footer/Footer.jsx";
import Landing from "./pages/landing/Landing.jsx";
import Products from "./pages/products/Products.jsx";
import Services from './pages/services/Services.jsx';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
