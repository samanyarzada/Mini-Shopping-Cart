import { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const products = [
  {
    id: 1,
    image: "🎧",
    name: "Wireless Headphones",
    category: "Electronics",
    price: 59,
  },
  {
    id: 2,
    image: "⌨️",
    name: "Mechanical Keyboard",
    category: "Accessories",
    price: 89,
  },
  {
    id: 3,
    image: "🖱️",
    name: "Wireless Mouse",
    category: "Accessories",
    price: 35,
  },
  {
    id: 4,
    image: "💻",
    name: "Laptop Stand",
    category: "Workspace",
    price: 45,
  },
];

export default function App() {
  const [cart, setCart] = useState([]);

  function handleAddToCart(product) {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  }

  function handleIncrease(id) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  function handleDecrease(id) {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function handleRemove(id) {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== id)
    );
  }

  function handleClearCart() {
    setCart([]);
  }

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const tax = subtotal * 0.1;

  const total = subtotal + tax;

  return (
    <div className="app">
      <header className="header">
        <div>
          <h1>Shoply</h1>
          <p>Simple shopping cart</p>
        </div>

        <div className="cart-count">
          🛒 <span>{totalItems}</span>
        </div>
      </header>

      <main className="dashboard">
        <ProductList
          products={products}
          onAddToCart={handleAddToCart}
        />

        <aside className="sidebar">
          <Cart
            cart={cart}
            totalItems={totalItems}
            subtotal={subtotal}
            tax={tax}
            total={total}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            onRemove={handleRemove}
            onClearCart={handleClearCart}
          />
        </aside>
      </main>
    </div>
  );
}