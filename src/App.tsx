import { useState } from "react";
import { CartItemsContext } from "./Contexts/cartItemsContext";
import { totalAmountContext } from "./Contexts/totalAmountContext";
import "./App.css";
import Header from "./Header/Header";
import Cart from "./Cart/Cart";
import ProductsGrid from "./Products/ProductsGrid";
import CheckoutForm from "./Checkout/CheckoutForm";
import { cartItemType } from "./Types/Types";

export default function App() {
  const [displayCart, setDisplayCart] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<cartItemType[]>(
    [] as cartItemType[]
  );
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [checkout, setCheckout] = useState<boolean>(false);

  function toggleCartDisplay() {
    setDisplayCart((prev) => !prev);
  }

  const PRODUCTS: cartItemType[] = [
    { id: 1, name: "product1", price: 50 },
    { id: 2, name: "product2", price: 20 },
    { id: 3, name: "product3", price: 30 },
    { id: 4, name: "product4", price: 40 },
    { id: 5, name: "product5", price: 70 },
    { id: 6, name: "product6", price: 90 },
    { id: 7, name: "product7", price: 15 },
    { id: 8, name: "product8", price: 80 },
    { id: 9, name: "product9", price: 100 },
    { id: 10, name: "product10", price: 78 },
  ];

  return (
    <CartItemsContext.Provider value={{ cartItems, setCartItems }}>
      <totalAmountContext.Provider value={{ totalAmount, setTotalAmount }}>
        <div className="full-app">
          {checkout && <CheckoutForm setCheckout={setCheckout} />}
          <Header onClick={toggleCartDisplay} />
          {displayCart && <Cart setCheckout={setCheckout} />}
          <ProductsGrid products={PRODUCTS} />
        </div>
      </totalAmountContext.Provider>
    </CartItemsContext.Provider>
  );
}
