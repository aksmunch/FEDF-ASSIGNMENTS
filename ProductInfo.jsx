import React from "react";

const ProductInfo = React.memo(({ product, onRemove }) => {
  return (
    <li>
      {product.name} - ₹{product.price}
      <button onClick={() => onRemove(product.id)}>
        Remove
      </button>
    </li>
  );
});

export default ProductInfo;