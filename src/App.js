import { useState } from "react";
import "./App.css";
import Header from "./Header/Header";
import Cart from "./Cart/Cart";
import ProductsGrid from "./Products/ProductsGrid";
import CheckoutForm from "./Checkout/CheckoutForm";

export default function App() {
  const [displayCart, setDisplayCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [itemID, setItemID] = useState(0);
  const [checkout, setCheckout] = useState(false);

  function toggleCartDisplay() {
    setDisplayCart((prev) => !prev);
  }

  function addCartItem(newItem) {
    setCartItems([...cartItems, newItem]);
    setTotalAmount(totalAmount + parseInt(newItem.price));
  }

  function deleteCartItem(deleteItem) {
    setCartItems(cartItems.filter((item) => item.id !== deleteItem.id));
    setTotalAmount(totalAmount - parseInt(deleteItem.price));
  }

  const PRODUCTS = [
    { name: "product1", price: "50" },
    { name: "product2", price: "20" },
    { name: "product3", price: "30" },
    { name: "product4", price: "40" },
    { name: "product5", price: "70" },
    { name: "product6", price: "90" },
    { name: "product7", price: "15" },
    { name: "product8", price: "80" },
    { name: "product9", price: "100" },
    { name: "product10", price: "78" },
  ];

  return (
    <div className="full-app">
      {checkout && (
        <CheckoutForm
          cartItems={cartItems}
          setCartItems={setCartItems}
          totalAmount={totalAmount}
          setTotalAmount={setTotalAmount}
          setCheckout={setCheckout}
        />
      )}
      <Header onClick={toggleCartDisplay} />
      {displayCart && (
        <Cart
          cartItems={cartItems}
          total={totalAmount}
          deleteCartItem={deleteCartItem}
          setCheckout={setCheckout}
        />
      )}
      <ProductsGrid
        products={PRODUCTS}
        addCartItem={addCartItem}
        itemID={itemID}
        setItemID={setItemID}
      />
    </div>
  );
}
