import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Packages from './pages/Packages';
import PackagesDetail from './pages/PackageDetail';
import About from './pages/About';
import CateringForm from './components/contact/CateringForm';
import Book from './pages/Book';


const Routing = () => (
    <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/packages/:packageId" element={<PackagesDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/catering" element={<CateringForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<Book />} />
        </Routes>
    </Router>

);

export default Routing;

