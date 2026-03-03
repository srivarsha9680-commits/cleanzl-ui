import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts([
      {
        id: 1,
        name: "Cleaning Spray",
        price: 199,
        image: "https://via.placeholder.com/150",
      },
      {
        id: 2,
        name: "Floor Cleaner",
        price: 299,
        image: "https://via.placeholder.com/150",
      },
      {
        id: 3,
        name: "Glass Cleaner",
        price: 149,
        image: "https://via.placeholder.com/150",
      },
    ]);
  }, []);

  return (
    <div className="app">
      <header className="navbar">
        <h1>🛒 Cleanzl Marketplace</h1>
      </header>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;