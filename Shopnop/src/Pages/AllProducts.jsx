import React from "react";
import { useAppContext } from "../Context/AppContext";
import ProductCard from "../Components/ProductCard";

const AllProducts = () => {
  const { products, searchTerm } = useAppContext();
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="mt-16 flex flex-col">
      <div className="flex flex-col items-end w-max">
        <p className="text-2xl font-medium uppercase">All products</p>
        <div className="w-16 h-0.5 bg-primary rounded-full"></div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6 mt-6">
      {filteredProducts.length > 0 ? (
  filteredProducts.map((product, index) => (
    <ProductCard key={index} product={product} />
  ))
) : (
  <p>No products found.</p>
)}

      </div>
    </div>
  );
};

export default AllProducts;
