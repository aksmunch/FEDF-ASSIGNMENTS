import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import ProductInfo from "./ProductInfo";

function ProductDashboard() {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 60000 },
    { id: 2, name: "Mouse", price: 5000 },
    { id: 3, name: "Keyboard", price: 1500 },
    { id: 4, name: "Monitor", price: 30000 },
  ]);

  const [searchText, setSearchText] = useState("");

  const searchRef = useRef(null);

  useEffect(() => {
    document.title = `Search: ${searchText}`;
  }, [searchText]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [products, searchText]);

  const totalPrice = useMemo(() => {
    return filteredProducts.reduce(
      (total, product) => total + product.price,
      0
    );
  }, [filteredProducts]);

  const removeProduct = useCallback((id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  }, []);

  const focusSearch = () => {
    searchRef.current.focus();
  };

  return (
    <div>
      <h2>Product Search and Price Calculator</h2>

      <input
        type="text"
        placeholder="Search Product"
        value={searchText}
        ref={searchRef}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <button onClick={focusSearch}>
        Focus Search Box
      </button>

      <h3>Total Price: ₹{totalPrice}</h3>

      <ul>
        {filteredProducts.map((product) => (
          <ProductInfo
            key={product.id}
            product={product}
            onRemove={removeProduct}
          />
        ))}
      </ul>
    </div>
  );
}

export default ProductDashboard;