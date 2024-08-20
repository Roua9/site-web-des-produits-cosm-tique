import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Slider from './components/slider/Slider';
import Produit from './components/produits/Produit';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Produit />
    </div>
  );
}

export default App;
