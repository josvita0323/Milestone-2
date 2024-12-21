// src/App.js
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavBar from './components/Navbar';
import HomePage from './components/HomePage';
import MenuPage from './components/MenuPage';
import CartPage from './components/CartPage';
import OrdersPage from './components/OrdersPage';
import ContactPage from './components/ContactPage';
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';
import Footer from './components/Footer';
import AboutUsPage from './components/AboutUsPage';
import FeedbackForm from './components/FeedbackForm';
import { useTheme } from './contexts/ThemeContext'; // Import context hook
import PrivateRoute from './components/PrivateRoute'; // Import custom PrivateRoute
import CheckoutPage from './components/CheckoutPage';
import OrderConfirmationPage from './components/OrderConfirmationPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Manage login state
  const { isDarkMode } = useTheme(); // Retrieve theme state from context

  // Dynamically set the theme class
  const themeClass = isDarkMode ? 'dark-theme' : 'light-theme';

  return (
    <Router>
      <div className={themeClass}>
        <NavBar />
        <Container className="mt-4">
          <Routes>
            {/* Non-private routes */}
            <Route path="/" element={<LoginPage handleLogin={() => setIsLoggedIn(true)} />} />
            <Route path="/signup" element={<SignUpPage />} />

            {/* Private routes */}
            <Route
              path="/home"
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <HomePage />
                </PrivateRoute>
              }
            />
            <Route
              path="/menu"
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <MenuPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/cart"
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <CartPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/orders"
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <OrdersPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/contact"
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <ContactPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/about"
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <AboutUsPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/feedback"
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <FeedbackForm />
                </PrivateRoute>
              }
            />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
          </Routes>
        </Container>
        {/* Only display Footer if logged in */}
        {isLoggedIn && <Footer />}
      </div>
    </Router>
  );
}

export default App;
