import React from 'react';

const CategoryList = ({ categories, products, deleteProduct }) => {
  const handleDelete = (id) => {
    deleteProduct(id);
  };

  return (
    <div className="category-list">
      <h3>Categories</h3>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            {category}
            <ul>
              {products
                .filter((product) => product.category === category)
                .map((product) => (
                  <li key={product.id}>
                    ID: {product.id} | Name: {product.name} | Price: ${product.price}
                    <button onClick={() => handleDelete(product.id)}>Delete</button>
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
