import React, { useState } from 'react';

const ProductForm = ({ addProduct }) => {
  const [newProduct, setNewProduct] = useState({
    id: '',
    name: '',
    category: 'Food',
    price: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = () => {
    if (newProduct.id && newProduct.name && newProduct.category && newProduct.price) {
      addProduct(newProduct);
      setNewProduct({ id: '', name: '', category: 'Food', price: '' });
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="add-product-form">
      <h2>Add New Product</h2>
      <form>
        <label>
          Product ID:
          <input
            type="number"
            name="id"
            placeholder="Product ID"
            value={newProduct.id}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Product Name:
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Category:
          <select name="category" value={newProduct.category} onChange={handleInputChange}>
            <option value="Food">Food</option>
            <option value="Skincare">Skincare</option>
            <option value="Electronic">Electronic</option>
          </select>
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={newProduct.price}
            onChange={handleInputChange}
          />
        </label>
        <button type="button" onClick={handleAddProduct}>
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;