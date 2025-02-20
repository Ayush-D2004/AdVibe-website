// import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Community from './pages/Community';
import BrandSolutions from './pages/BrandSolutions';
import SuccessStories from './pages/SuccessStories';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Register from './pages/Register';
import RegistrationSuccess from './pages/RegistrationSuccess';
import SignIn from './pages/SignIn';
import ProtectedRoute from './components/ProtectedRoute';
import Workspace from './pages/Workspace';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route
          path="/workspace/*"
          element={
            <ProtectedRoute>
              <Workspace />
            </ProtectedRoute>
          }
        />
        <Route
          path="*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/community" element={<Community />} />
                <Route path="/brands" element={<BrandSolutions />} />
                <Route path="/stories" element={<SuccessStories />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/register/:type" element={<Register />} />
                <Route path="/registration-success" element={<RegistrationSuccess />} />
                <Route path="/login" element={<SignIn />} />
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;