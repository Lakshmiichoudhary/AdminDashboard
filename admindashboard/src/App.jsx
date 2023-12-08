import React, { useState } from 'react';
import './App.css';
import ProductForm from './Components/ProductForm';
import CategoryList from './Components/CategoryList';
import ProductList from './Components/ProductList';

function App() {
  const [products, setProducts] = useState([]);

  const deleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const categories = ['Food', 'Skincare', 'Electronics']; // Define your categories here

  return (
    <div className="App">
      <h1>Product List</h1>
      <ProductForm addProduct={addProduct} />
      <div className="categories">
        <CategoryList categories={categories} products={products} />
      </div>
      <div className="products">
        <ProductList products={products} deleteProduct={deleteProduct} />
      </div>
    </div>
  );
}

export default App;
