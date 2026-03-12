import React from 'react';
import Header from './Components/Header';
import ProductList from './Components/ProductList';
import { products } from './Data/product';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <ProductList products={products} />
      </main>
    </div>
  );
}

export default App;