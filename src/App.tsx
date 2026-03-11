import { Routes, Route } from 'react-router';
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/Catalog';
import AboutUs from './pages/AboutUs/AboutUs';
import ContactUs from './pages/ContactUs/ContactUs';
import Cart from './pages/Cart/Cart';
import Product from './pages/Product/Product';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/product" element={<Product />} />
            </Routes>
        </>
    );
}

export default App;
