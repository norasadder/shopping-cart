import { useState } from "react";
import "./CheckoutForm.css";
import { useContext } from "react";
import { CartItemsContext } from "../Contexts/cartItemsContext";
import { totalAmountContext } from "../Contexts/totalAmountContext";
const CheckoutForm: React.FunctionComponent<{
  setCheckout: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setCheckout }) => {
  const { cartItems, setCartItems } = useContext(CartItemsContext);
  const { totalAmount, setTotalAmount } = useContext(totalAmountContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function cancelCheckout() {
    setCheckout(false);
  }

  async function completeCheckout(e: React.SyntheticEvent) {
    e.preventDefault();
    if (name === "" || email === "") {
      return;
    }
    let data = {
      items: { cartItems },
      amount: { totalAmount },
      name: { name },
      email: { email },
    };
    try {
      await fetch("http://localhost:3000/notes", {
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

  function onNameChange(e: React.FormEvent<HTMLInputElement>) {
    setName(e.currentTarget.value);
  }

  function onEmailChange(e: React.FormEvent<HTMLInputElement>) {
    setEmail(e.currentTarget.value);
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
};

export default CheckoutForm;
