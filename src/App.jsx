import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home/Index.jsx";
import About from './pages/About/Index.jsx';
import Pricing from './pages/Pricing/Index.jsx';
import Career from './pages/Career/Index.jsx';
import Blog from './pages/Blog/Index.jsx';
import Login from "./pages/Auth/Login.jsx";
import Signup from "./pages/Auth/Signup.jsx";
import TransitionWrapper from "./components/TransitionWrapper.jsx";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<TransitionWrapper><Home /></TransitionWrapper>} />
        <Route path="/about" element={<TransitionWrapper><About /></TransitionWrapper>} />
        <Route path="/pricing" element={<TransitionWrapper><Pricing /></TransitionWrapper>} />
        <Route path="/career" element={<TransitionWrapper><Career /></TransitionWrapper>} />
        <Route path="/blog" element={<TransitionWrapper><Blog /></TransitionWrapper>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
};

export default App;