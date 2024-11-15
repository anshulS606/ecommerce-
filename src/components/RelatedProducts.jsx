import React, { useContext, useState, useEffect } from 'react'; // Added useEffect
import { ShopContext } from '../context/ShopContext';

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext); // Access products from context
  const [related, setRelated] = useState([]); // State to store related products

  useEffect(() => {
    // Check if products array has data
    if (products.length > 0) {
      // Filter products based on category and subCategory
      let relatedProducts = products
        .filter((item) => item.category === category) // Match category
        .filter((item) => item.subCategory === subCategory) // Match subCategory
        .slice(0, 5); // Limit to 5 related products

      setRelated(relatedProducts); // Update related state
      console.log(relatedProducts); // Log the related products for debugging
    }
  }, [products, category, subCategory]); // Dependencies include category and subCategory

  return (
    <div>
      {/* Render the related products */}
      <h3>Related Products</h3>
      {related.length > 0 ? (
        <ul>
          {related.map((product, index) => (
            <li key={index}>{product.name}</li> // Render product names or other details
          ))}
        </ul>
      ) : (
        <p>No related products found.</p>
      )}
    </div>
  );
};

export default RelatedProducts;
