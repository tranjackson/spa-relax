import * as React from 'react';
import { Routes,Route } from 'react-router-dom';
import { TotalProvider } from './components/TotalContext';
import Header from './components/Header';
import Footer from './components/Footer';

//Import our pages
import Home from './pages/Home';
import Packages from './pages/Packages';
import Products from './pages/Products';
import Book from './pages/Book';

import './App.css';

// The App component is the main scaffold for the entire react application
// This is normally where we define most if not all the pages of the application
// You can architect this however you want, React is flexible with how you should layout your project the file directories
// This defines the basic structure/template of the app


function App() {
  return (
    <TotalProvider>
    <div className="app">
      <div>
        <Header />
      </div>
        <div className="mainContent container-fluid">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/products" element={<Products /> } />
            <Route path="/book" element={<Book />} />
        </Routes>
      </div>
        <Footer />
  </div>
  </TotalProvider>
  );
}

export default App;