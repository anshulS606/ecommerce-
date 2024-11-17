import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title'; // Ensure the correct import path
import ProductItem from './ProductItem'; // Ensure the correct import path

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext); // Access the products from context
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0 && category && subCategory) {
      const relatedProducts = products
        .filter((item) => item.category === category) // Match category
        .filter((item) => item.subCategory === subCategory) // Match subCategory
        .slice(0, 5); // Limit to 5 related products
      setRelated(relatedProducts);
    }
  }, [products, category, subCategory]);

  return (
    <div className="my-24">
      {/* Title Section */}
      <div className="text-center text-3xl py-2">
        <Title text="RELATED" text2="PRODUCTS" />
      </div>
      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {related.map((item) => (
          <ProductItem
            key={item._id || item.id} // Ensure a unique key exists
            id={item._id || item.id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
