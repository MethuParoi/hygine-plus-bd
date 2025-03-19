import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div>
      <h1>{product?.products_name}</h1>
    </div>
  );
};

export default ProductCard;
