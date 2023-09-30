import { useState } from "react";
import "./CheckoutForm.css";
export default function CheckoutForm({
  cartItems,
  setCartItems,
  totalAmount,
  setTotalAmount,
  setCheckout,
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function cancelCheckout() {
    setCheckout(false);
  }

  async function completeCheckout(e) {
    e.preventDefault();
    if (name == "" || email == "") {
      return;
    }
    let data = {
      items: { cartItems },
      amount: { totalAmount },
      name: { name },
      email: { email },
    };
    try {
      const response = await fetch("http://localhost:3000/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setCartItems([]);
      setTotalAmount(0);
      setCheckout(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  function onNameChange(e) {
    setName(e.target.value);
  }

  function onEmailChange(e) {
    setEmail(e.target.value);
  }

  return (
    <div className="checkout-form">
      <p> To complete the order, please fill your info</p>
      <form>
        <input type="text" placeholder="name" onChange={onNameChange}></input>

        <input type="text" placeholder="email" onChange={onEmailChange}></input>

        <div className="checkout-buttons">
          <button onClick={completeCheckout}>Complete Checkout</button>
          <button onClick={cancelCheckout}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
